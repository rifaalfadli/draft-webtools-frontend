import { useFormContext } from "react-hook-form";

export default function DirectObjectForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputStyle = (hasError) =>
    `w-full px-4 py-2 rounded-lg outline-none transition-all border
  ${
    hasError
      ? "border-red-500 bg-[#fff5f5] ring-1 ring-red-200"
      : "border-gray-300 bg-white focus:border-[#3399cc] focus:ring-1 focus:ring-[#3399cc]"
  }`;

  const errorStyle = "text-xs text-red-500 min-h-[18px]";

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <h2 className="text-blue-800 bg-blue-200 py-3 mb-6 text-center items-center gap-2 text-lg font-semibold">
        Direct Object
      </h2>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-gray-700 mb-2 text-sm font-medium">
            Name
          </label>
          <input
            {...register("object.nameDo")}
            placeholder="Input Name Object"
            className={inputStyle(errors.object?.nameDo)}
          />
          <p className={errorStyle}>{errors.object?.nameDo?.message || ""}</p>
        </div>

        {/* Front Area */}
        <div>
          <label className="block text-gray-700 mb-2 text-sm font-medium">
            Front Area
          </label>
          <input
            {...register("object.areaFrontDo")}
            placeholder="Input Front Area Object"
            className={inputStyle(errors.object?.areaFrontDo)}
          />
          <p className={errorStyle}>
            {errors.object?.areaFrontDo?.message || ""}
          </p>
        </div>

        {/* Side Area */}
        <div>
          <label className="block text-gray-700 mb-2 text-sm font-medium">
            Side Area
          </label>
          <input
            {...register("object.areaSideDo")}
            placeholder="Input Side Area"
            className={inputStyle(errors.object?.areaSideDo)}
          />
          <p className={errorStyle}>
            {errors.object?.areaSideDo?.message || ""}
          </p>
        </div>

        {/* Coefficient */}
        <div>
          <label className="block text-gray-700 mb-2 text-sm font-medium">
            Coefficient
          </label>
          <input
            {...register("object.cfDo")}
            placeholder="Input Coefficient Object"
            className={inputStyle(errors.object?.cfDo)}
          />
          <p className={errorStyle}>{errors.object?.cfDo?.message || ""}</p>
        </div>

        {/* Height */}
        <div>
          <label className="block text-gray-700 mb-2 text-sm font-medium">
            Height
          </label>
          <input
            {...register("object.heightDo")}
            placeholder="Input Height Object"
            className={inputStyle(errors.object?.heightDo)}
          />
          <p className={errorStyle}>{errors.object?.heightDo?.message || ""}</p>
        </div>

        {/* Weight */}
        <div>
          <label className="block text-gray-700 mb-2 text-sm font-medium">
            Weight
          </label>
          <input
            {...register("object.weightDo")}
            placeholder="Input Weight Object"
            className={inputStyle(errors.object?.weightDo)}
          />
          <p className={errorStyle}>{errors.object?.weightDo?.message || ""}</p>
        </div>
      </div>
    </div>
  );
}
