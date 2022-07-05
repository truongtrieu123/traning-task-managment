import DefaultLayout from "containers/layout/layout";
import Link from "next/link";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { AuthGuard } from "containers/auth/auth-guard";

const AboutPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <AuthGuard>
      <DefaultLayout>
        <h1>About</h1>
        <p>This is the about page</p>
        <p>
          <Link href="/dashboard">Go home</Link>
        </p>
      </DefaultLayout>
    </AuthGuard>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default AboutPage;
