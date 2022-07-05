import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import AuthPage from "containers/auth";

const RegisterPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  return (
    <>
      <AuthPage />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default RegisterPage;
