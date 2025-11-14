import * as Style from './Input.style';



export default function Input({
    width,
    height,
    padding,
    border,
    borderRadius,
    borderColor,
    backgroundColor,
    boxShadow,
    textShadow,
    textTransform,
    color,
    fontSize,
    fontWeight,
    lineHeight,
    textAlign,
    display,
    alignItems,
    justifyContent,
    outline,
    textAlignPlaceholder,
    fontSizePlaceholder,
    colorPlaceholder,
    txtPlaceholder,
    transition,
    borderColorHover,
    colorHover,
    cursor,
    value,
    name,
    id,
    onclick,
    onChange,
    margin,
    type
}) {
    return (
        <Style.Input
            $width={width}
            $height={height}
            $padding={padding}
            $border={border}
            $borderRadius={borderRadius}
            $borderColor={borderColor}
            $backgroundColor={backgroundColor}
            $boxShadow={boxShadow}
            $textShadow={textShadow}
            $textTransform={textTransform}
            $color={color}
            $fontSize={fontSize}
            $fontWeight={fontWeight}
            $lineHeight={lineHeight}
            $textAlign={textAlign}
            $display={display}
            $alignItems={alignItems}
            $justifyContent={justifyContent}
            $outline={outline}
            $textAlignPlaceholder={textAlignPlaceholder}
            $fontSizePlaceholder={fontSizePlaceholder}
            $colorPlaceholder={colorPlaceholder}
            placeholder={txtPlaceholder}
            $transition={transition}
            $borderColorHover={borderColorHover}
            $colorHover={colorHover}
            $cursor={cursor}
            type={type}
            value={value ?? ''}
            name={name}
            id={id}
            onclick={onclick}
            onChange={onChange}
            $margin={margin}
        >

        </Style.Input>
    )
}