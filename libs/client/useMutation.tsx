import { useState } from "react";

//declare returnType
interface UseMutationState {
  loading: boolean;
  data: object;
  error: object;
}
type UseMutationReturn = [(data: any) => void, UseMutationState];

//useMutation
export default function useMutation(url: string): UseMutationReturn {
  //useMutationState
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<undefined | any>();
  const [error, setError] = useState<undefined | any>();

  //mutationFunction
  const mutationFunction = (form: any) => {
    setLoading(true);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then(response => response.json().catch(() => {}))
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  };

  return [mutationFunction, { loading, data, error }];
}
