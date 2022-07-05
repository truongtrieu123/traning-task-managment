import { AuthWrapper } from "containers/auth/auth-wrapper";
import DefaultLayout from "containers/layout/layout";
import Link from "next/link";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";

const AboutPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <AuthWrapper>
      <DefaultLayout>
        <div>
        <h1>About</h1>
        <p>This is the about page</p>
        <p>
          <Link href="/dashboard">Go home</Link>
        </p>
        </div>
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
