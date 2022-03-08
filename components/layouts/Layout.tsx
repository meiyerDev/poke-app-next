import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

type Props = {
  title?: string;
};

export const Layout: FC<Props> = ({ children, title = "Pokemon App" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Meiyer Jaimes" />
        <meta
          name="description"
          content={`Informacion sobre pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
