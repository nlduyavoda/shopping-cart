import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";

const INCREMENT_COUNTER = gql`
  mutation SingleUpload($file: FileUpload!) {
    singleUpload(file: $file) {
      filename
      mimetype
      encoding
    }
  }
`;

export default function Form(props: any) {
  const [mutateFunction, { data, loading, error }] =
    useMutation(INCREMENT_COUNTER);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    const res = data.file[0];
    console.log("res :>> ", res);
    mutateFunction({
      variables: {
        file: res,
      },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="file" {...register("file")} />
        <input type="submit" />
      </form>
    </div>
  );
}
