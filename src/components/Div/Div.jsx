import * as Style from './Div.style';



export default function Div({
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
    textAlign,
    display,
    alignItems,
    justifyContent,
    outline,
    transition,
    cursor,
    textAlignPlaceholder,
    fontSizePlaceholder,
    colorPlaceholder,
    borderColorHover,
    colorHover,
    gap,
    flexDirection,
    margin,
    gridTemplateColumns,
    children
}) {
    return (
        <Style.Div
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
            $textAlign={textAlign}
            $display={display}
            $alignItems={alignItems}
            $justifyContent={justifyContent}
            $outline={outline}
            $transition={transition}
            $cursor={cursor}
            $textAlignPlaceholder={textAlignPlaceholder}
            $fontSizePlaceholder={fontSizePlaceholder}
            $colorPlaceholder={colorPlaceholder}
            $borderColorHover={borderColorHover}
            $colorHover={colorHover}
            $gap={gap}
            $flexDirection={flexDirection}
            $margin={margin}
            $gridTemplateColumns={gridTemplateColumns}
        >
            {children}
        </Style.Div>
    )
}