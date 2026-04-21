import { useState } from "react";
import { calculateData } from "../services/calculationService";

export const useCalculation = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCalculate = async (data) => {
    setLoading(true);
    try {
      const res = await calculateData(data);
      setResult(res);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { result, loading, handleCalculate };
};
