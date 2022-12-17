interface IconProps {
  fill?: string;
  size?: string;
}

export const DonutIcon = (props: IconProps) => {
  const { fill = "#EDF6F9", size = "14" } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM50 69.7752C60.9216 69.7752 69.7753 60.9215 69.7753 49.9999C69.7753 39.0783 60.9216 30.2246 50 30.2246C39.0784 30.2246 30.2247 39.0783 30.2247 49.9999C30.2247 60.9215 39.0784 69.7752 50 69.7752Z"
        fill={fill}
      />
    </svg>
  );
};
