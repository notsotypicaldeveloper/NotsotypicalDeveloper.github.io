import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { terminalRuns } from "../data/constants";

const blink = keyframes`
  0%, 55% { opacity: 1; }
  56%, 100% { opacity: 0; }
`;

const Frame = styled.div`
  background: ${({ theme }) => theme.panel};
  border: 1px solid ${({ theme }) => theme.line};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 24px 60px -24px rgba(0, 0, 0, 0.7),
    0 0 0 1px rgba(245, 180, 83, 0.04);
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.line_soft};
  font-family: ${({ theme }) => theme.mono};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.dim};
`;

const Live = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: ${({ theme }) => theme.fill};

  &::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({ theme }) => theme.fill};
    box-shadow: 0 0 8px ${({ theme }) => theme.fill};
  }
`;

const Screen = styled.div`
  padding: 20px 18px 22px;
  font-family: ${({ theme }) => theme.mono};
  font-size: 0.84rem;
  line-height: 1.75;
  min-height: 214px;

  @media (max-width: 640px) {
    font-size: 0.76rem;
    min-height: 196px;
  }
`;

const Prompt = styled.div`
  color: ${({ theme }) => theme.ink};
  word-break: break-word;

  &::before {
    content: "$ ";
    color: ${({ theme }) => theme.amber};
    font-weight: 600;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 1.05em;
  vertical-align: text-bottom;
  background: ${({ theme }) => theme.amber};
  animation: ${blink} 0.9s steps(1) infinite;
  margin-left: 1px;
`;

const TraceLine = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  color: ${({ theme }) => theme.dim};

  &::before {
    content: "▸ ";
    color: ${({ theme }) => theme.faint};
  }
`;

const TraceText = styled.span`
  flex: 1;

  em {
    font-style: normal;
    color: ${({ theme }) => theme.fill};
  }
`;

const Ms = styled.span`
  color: ${({ theme }) => theme.faint};
`;

const Result = styled.div`
  color: ${({ theme }) => theme.fill};
  margin-top: 6px;
  word-break: break-word;
`;

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduce(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduce;
}

const TYPE_MS = 34;
const TRACE_MS = 480;
const HOLD_MS = 3400;

export default function Terminal() {
  const reduce = usePrefersReducedMotion();
  const [runIdx, setRunIdx] = useState(0);
  const [typedLen, setTypedLen] = useState(0);
  const [traces, setTraces] = useState(0);
  const [done, setDone] = useState(false);
  const timers = useRef<number[]>([]);

  const run = terminalRuns[runIdx];

  useEffect(() => {
    if (reduce) {
      setTypedLen(terminalRuns[0].cmd.length);
      setTraces(terminalRuns[0].trace.length);
      setDone(true);
      return;
    }

    const schedule = (fn: () => void, ms: number) => {
      timers.current.push(window.setTimeout(fn, ms));
    };

    setTypedLen(0);
    setTraces(0);
    setDone(false);

    let t = 500;
    for (let i = 1; i <= run.cmd.length; i++) {
      schedule(() => setTypedLen(i), t);
      t += TYPE_MS;
    }
    t += 420;
    for (let i = 1; i <= run.trace.length; i++) {
      schedule(() => setTraces(i), t);
      t += TRACE_MS;
    }
    schedule(() => setDone(true), t);
    t += HOLD_MS;
    schedule(() => setRunIdx((v) => (v + 1) % terminalRuns.length), t);

    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [runIdx, reduce, run.cmd.length, run.trace.length]);

  const shown = reduce ? terminalRuns[0] : run;

  return (
    <Frame aria-label="Interactive demo: natural language to executed system action">
      <TitleBar>
        <span>nl-exec — production trace</span>
        <Live>live</Live>
      </TitleBar>
      <Screen aria-live="off">
        <Prompt>
          {shown.cmd.slice(0, typedLen)}
          {!done && <Cursor aria-hidden="true" />}
        </Prompt>
        {shown.trace.slice(0, traces).map((line) => (
          <TraceLine key={line.text}>
            <TraceText>
              {line.text} · <em>ok</em>
            </TraceText>
            <Ms>{line.ms}</Ms>
          </TraceLine>
        ))}
        {done && (
          <Result>
            {shown.result}
            <Cursor aria-hidden="true" />
          </Result>
        )}
      </Screen>
    </Frame>
  );
}
