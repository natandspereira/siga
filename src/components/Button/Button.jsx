import * as Style from './Button.style';



export default function Button({
    width,
    height,
    padding,
    border,
    borderRadius,
    backgroundColor,
    boxShadow,
    textShadow,
    textTransform,
    color,
    fontSize,
    fontWeight,
    textAlign,
    cursor,
    textAlignPlaceholder,
    fontSizePlaceholder,
    colorPlaceholder,
    borderColorHover,
    colorHover,
    margin,
    type,
    onClick,
    txt
}){
    return(
        <Style.Button
            $width={width}
            $height={height}
            $padding={padding}
            $border={border}
            $borderRadius={borderRadius}
            $backgroundColor={backgroundColor}
            $boxShadow={boxShadow}
            $textShadow={textShadow}
            $textTransform={textTransform}
            $color={color}
            $fontSize={fontSize}
            $fontWeight={fontWeight}
            $textAlign={textAlign}
            $cursor={cursor}
            $textAlignPlaceholder={textAlignPlaceholder}
            $fontSizePlaceholder={fontSizePlaceholder}
            $colorPlaceholder={colorPlaceholder}
            $borderColorHover={borderColorHover}
            $colorHover={colorHover}
            $margin={margin}
            type={type}
            onClick={onClick}
        >
            {txt}
        </Style.Button>
    )
}