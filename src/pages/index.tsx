import { NextPageContext } from 'next';
import Head from 'next/head';
import React from 'react';
import packageJson from '../../package.json';
import { getQuote } from '../api';
import { History } from '../components/history';
import { Input } from '../components/input';
import { useHistory } from '../hooks/history';
import { Banner } from "../components/banner";

interface IndexPageProps {
  version: string;
  quote: string;
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const IndexPage: React.FC<IndexPageProps> = ({ version, quote, inputRef }) => {
  const containerRef = React.useRef(null);
  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [history]);

  return (
    <>
      <Head>
        <title>Terminal · Kostadin Plachkov</title>
      </Head>

      <div className="py-6 pl-6 pr-3 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow">
        <div ref={containerRef} className="overflow-y-auto h-full pr-2.5">
          <Banner/>

          <History history={history} />

          <Input
            inputRef={inputRef}
            containerRef={containerRef}
            command={command}
            history={history}
            lastCommandIndex={lastCommandIndex}
            setCommand={setCommand}
            setHistory={setHistory}
            setLastCommandIndex={setLastCommandIndex}
            clearHistory={clearHistory}
          />
        </div>
      </div>
    </>
  );
};

export async function getStaticProps(context: NextPageContext) {
  const { quote } = await getQuote();

  return {
    props: {
      version: packageJson.version,
      quote,
    },
    revalidate: true,
  };
}

export default IndexPage;
