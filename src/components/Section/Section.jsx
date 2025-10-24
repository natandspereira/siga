import { Children } from 'react';
import * as Style from './Section.style';



export default function Section({
    display,
    alignItems,
    justifyContent,
    flexDirection,
    width,
    height,
    gap,
    backgroundColor,
    padding,
    children
}) {
    return (
        <Style.Section
            display={display}
            alignItems={alignItems}
            justifyContent={justifyContent}
            flexDirection={flexDirection}
            width={width}
            height={height}
            gap={gap}
            backgroundColor={backgroundColor}
            padding={padding}
        >
            {children}
        </Style.Section>
    )
}