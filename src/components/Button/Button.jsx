import * as Style from './Button.style';



export default function Button({ 
    txt, 
    colorBackground, 
    colorFont, 
    border, 
    padding, 
    borderRadius, 
    fontSize,
    textShadow, 
    borderColorHover,
    cursor,
    width,
    margin,
    height 
}) {
    return (
        <Style.Button 
            colorBackground={colorBackground}
            colorFont={colorFont}
            border={border}
            padding={padding}
            borderRadius={borderRadius}
            fontSize={fontSize}
            textShadow={textShadow}
            borderColorHover={borderColorHover}
            cursor={cursor}
            width={width}
            height={height}
            margin={margin}
        >
            <p>{txt}</p>
        </Style.Button>
    )
}