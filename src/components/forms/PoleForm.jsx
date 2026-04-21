import { useFormContext } from "react-hook-form";

export default function PoleForm() {
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
    <div className="bg-white p-6 rounded-xl border border border-gray-200 ">
      <h2 className="text-blue-800 bg-blue-200 py-3 mb-6 text-center items-center gap-2 text-lg font-semibold">
        Pole Specifications
      </h2>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {/* Diameter */}
        <div>
          <label className="block text-gray-700 mb-2 text-sm font-medium">
            Diameter
          </label>
          <input
            {...register("pole.diameterPole")}
            placeholder="Input Diameter Pole"
            className={`${inputStyle(errors.pole?.diameterPole)}`}
          />
          <p className={errorStyle}>
            {errors.pole?.diameterPole?.message || ""}
          </p>
        </div>

        {/* Thickness */}
        <div>
          <label className="block text-gray-700 mb-2 text-sm font-medium">
            Thickness
          </label>
          <input
            {...register("pole.thicknessPole")}
            placeholder="Iput Thickness Pole"
            className={`${inputStyle(errors.pole?.thicknessPole)}`}
          />
          <p className={errorStyle}>
            {errors.pole?.thicknessPole?.message || ""}
          </p>
        </div>

        {/* Height */}
        <div>
          <label className="block text-gray-700 mb-2 text-sm font-medium">
            Height
          </label>
          <input
            {...register("pole.heightPole")}
            placeholder="Input Height Pole"
            className={`${inputStyle(errors.pole?.heightPole)}`}
          />
          <p className={errorStyle}>{errors.pole?.heightPole?.message || ""}</p>
        </div>

        {/* Lowest Height */}
        <div>
          <label className="block text-gray-700 mb-2 text-sm font-medium">
            Lowest Height
          </label>
          <input
            {...register("pole.lowestHeightPole")}
            placeholder="Input Lowest Height Pole"
            className={`${inputStyle(errors.pole?.lowestHeightPole)}`}
          />
          <p className={errorStyle}>
            {errors.pole?.lowestHeightPole?.message || ""}
          </p>
        </div>

        {/* Material */}
        <div className="col-span-2">
          <label className="block text-gray-700 mb-2 text-sm font-medium">
            Select Material Pole
          </label>
          <select
            {...register("pole.materialPole")}
            className={`${inputStyle(errors.pole?.materialPole)} min-h-[42px]`}
          >
            <option value="STK400">STK400</option>
            <option value="STK540">STK540</option>
          </select>
          <p className={errorStyle}>
            {errors.pole?.materialPole?.message || ""}
          </p>
        </div>
      </div>
    </div>
  );
}
