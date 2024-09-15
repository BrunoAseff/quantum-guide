export default function Logo() {
  return (
    <div className="flex mb-6 text-4xl items-center ml-auto mr-auto">
      <svg
        className="flex justify-start mt-2"
        width="35"
        height="35"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <g clip-path="url(#clip0_234_920)">
          {" "}
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 100L4.37114e-06 0L100 4.37114e-06C100 55.2285 55.2285 100 0 100ZM200 100C200 44.7716 155.228 1.88558e-05 100 4.37114e-06L100 100L6.5969e-06 100C1.76868e-06 155.228 44.7715 200 100 200H200L200 100ZM199.961 100L100 100L100 200C100 144.785 144.75 100.021 199.961 100Z"
            fill="url(#paint0_linear_234_920)"
          />{" "}
        </g>{" "}
        <defs>
          {" "}
          <linearGradient
            id="paint0_linear_234_920"
            x1="157.5"
            y1="32"
            x2="44"
            y2="147.5"
            gradientUnits="userSpaceOnUse"
          >
            {" "}
            <stop offset="0.0509862" stop-color="black" />{" "}
            <stop offset="1" stop-color="black" />{" "}
          </linearGradient>{" "}
          <clipPath id="clip0_234_920">
            {" "}
            <rect width="200" height="200" fill="black" />{" "}
          </clipPath>{" "}
        </defs>{" "}
      </svg>
      <h1 className="ml-4 font-extrabold">Guia Quântico</h1>
    </div>
  );
}
