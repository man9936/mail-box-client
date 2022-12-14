import ComposeMail from "../components/mailbox/ComposeMail";
// import NavBar from '../components/NavBar';
import MailOptions from "../components/MailOptions";
import { Fragment } from "react";

const ComposeMailPage = () => {
  return (
    <Fragment>
      <MailOptions />
      <ComposeMail></ComposeMail>
    </Fragment>
  );
};

export default ComposeMailPage;
