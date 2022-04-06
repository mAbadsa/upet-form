import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios, { AxiosResponse, AxiosError } from "axios";

import Alert from "@mui/material/Alert";

import Form from "../../components/Form";
import { userDataType } from "../../type";

const Register: FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onFinish = async (userData: userDataType): Promise<void> => {
    console.log(userData);
    try {
      setLoading(true);
      setError("");
      const res: AxiosResponse = await Axios.post("/api/v1/signup", userData);
      setLoading(false);
      navigate("/dashboard", {
        state: {
          userData: { ...res?.data?.data },
        },
      });
    } catch (err: any) {
      const e: AxiosError = err.toJSON();
      setError(e.message);
      setLoading(false);
    }
  };
  console.log(error);

  return (
    <div>
      {error && <Alert severity="error">{error}</Alert>}
      <Form onFinish={onFinish} isLoading={loading} />
    </div>
  );
};

export default Register;

