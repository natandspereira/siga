import * as Style from './Div.style';

export default function Div({
    children,
    width,
    height,
    border,
    borderRadius,
    backgroundColor,
    padding,
    display,
    alignItems,
    justifyContent,
    flexDirection,
    gap
}) {
    return (
        <>
            <Style.Div
                width={width}
                height={height}
                border={border}
                borderRadius={borderRadius}
                backgroundColor={backgroundColor}
                padding={padding}
                display={display}
                alignItems={alignItems}
                justifyContent={justifyContent}
                flexDirection={flexDirection}
                gap={gap}
            >
            {children}
        </Style.Div >
        </>
    )
}