type RandomNumberType = {
  value: number;
};

type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};
type NegativeNumber = RandomNumberType & {
  isNegative: boolean;
  isPositve?: never;
  isZero?: never;
};
type Zero = RandomNumberType & {
  isZero: boolean;
  isPositve?: never;
  isNegative?: never;
};

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;

// type RandomNumberProps = {
//   value: number;
//   isPositive?: boolean;
//   isNegative?: boolean;
//   isZero?: boolean;
// };

export const RandomNumber = ({
  value,
  //   isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value}
      {/* {isPositive && "Positive"}  */}
      {isNegative && "Negative"} {isZero && "Zero"}
    </div>
  );
};
