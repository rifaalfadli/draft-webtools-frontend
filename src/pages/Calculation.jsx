import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { calculationSchema } from "../schemas/calculationSchema";
import PoleForm from "../components/forms/PoleForm";
import DirectObjectForm from "../components/forms/DirectObjectForm";
import ResultCard from "../components/ResultCard";
import { useCalculation } from "../hooks/useCalculation";
import { Loader2, Calculator } from "lucide-react";

function CalculationPage() {
  const methods = useForm({
    resolver: yupResolver(calculationSchema),
    mode: "onSubmit",
  });

  const { result, loading, handleCalculate } = useCalculation();

  const onSubmit = (data) => {
    const payload = {
      pole: data.pole,
      objects: [data.object],
    };

    handleCalculate(payload);
  };

  const isValidResult =
    result &&
    typeof result.windload === "number" &&
    typeof result.moment === "number";

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 py-12 px-20"
      >
        <div className="space-y-6">
          {/* HEADER */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
              Pole Calculations
            </h1>
          </div>

          {/* FORM CARD CONTAINER */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 lg:p-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <PoleForm />
              <DirectObjectForm />
            </div>
          </div>

          {/* BUTTON */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className={`
                flex items-center gap-2 px-10 py-3 
                  bg-blue-700 text-white rounded-lg shadow-sm 
                  hover:bg-blue-800 hover:shadow-md 
                  transition-all duration-200
                  font-medium text-base
                  focus:outline-none focus:ring-2 focus:ring-blue-500/50
              `}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Calculating...
                </>
              ) : (
                <>
                  <Calculator className="w-5 h-5 hp:w-4 hp:h-4" />
                  Calculate Result
                </>
              )}
            </button>
          </div>

          {/* RESULT */}
          <div className="border-t border-slate-200"></div>
          {result && (
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                Calculation Result
              </h2>

              {isValidResult ? (
                <ResultCard data={result} />
              ) : (
                <p className="text-center text-gray-400 italic">
                  No calculation result yet
                </p>
              )}
            </div>
          )}
        </div>
      </form>
    </FormProvider>
  );
}

export default CalculationPage;
