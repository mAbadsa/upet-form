import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios, { AxiosResponse } from "axios";

import Alert from "@mui/material/Alert";

import Form from "../../components/Form";
import { userDataType } from "../../type";

const Register: FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onFinish = async (userData: userDataType): Promise<void> => {
    try {
      setLoading(true);
      setError("");
      const res: AxiosResponse = await Axios.post("/api/v1/signup", userData);
      console.log({ res });
      setLoading(false);
      navigate("/dashboard", {
        state: {
          userData: { ...res?.data?.data },
        },
      });
    } catch (err: any) {
      setError(err);
      setLoading(false);
    }
  };
  return (
    <div>
      {error && <Alert severity="error">{error}</Alert>}
      <Form onFinish={onFinish} isLoading={loading} />
    </div>
  );
};

export default Register;

