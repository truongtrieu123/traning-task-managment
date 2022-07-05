import Alert from "react-bootstrap/Alert";

interface IProps{
    info:{
        type:string,
        message:string;
    }
}

const AlertMessage = ({ info }:IProps) => {
  return info === null ? null : (
    <Alert variant={info.type}>{info.message}</Alert>
  );
};

export default AlertMessage;
