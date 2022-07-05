import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import DefaultLayout from "containers/layout/layout";
import { AuthWrapper } from "containers/auth/auth-wrapper";
import Dashboard from "containers/dashboard";

const DashboardPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  return (
    <AuthWrapper>
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </AuthWrapper>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default DashboardPage;
