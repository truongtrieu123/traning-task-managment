import About from "containers/about";
import { AuthWrapper } from "containers/auth/auth-wrapper";
import DefaultLayout from "containers/layout/layout";
import Link from "next/link";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";

const AboutPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <AuthWrapper>
      <DefaultLayout>
        <About/>
      </DefaultLayout>
    </AuthWrapper>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default AboutPage;
