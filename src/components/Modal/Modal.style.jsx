import styled from 'styled-components';

export const ModalOverlay = styled.div`
  width: ${({ $widthOverlay }) => $widthOverlay || '100vw'};
  height: ${({ $heightOverlay }) => $heightOverlay || '100vh'};
  background-color: ${({ $backgroundColorOverlay }) => $backgroundColorOverlay || 'rgba(0, 0, 0, 0.1)'};
  z-index: ${({ $zIndexOverlay }) => $zIndexOverlay || 1000};
  display: ${({ $displayOverlay }) => $displayOverlay || 'flex'};
  align-items: ${({ $alignItemsOverlay }) => $alignItemsOverlay || 'center'};
  justify-content: ${({ $justifyContentOverlay }) => $justifyContentOverlay || 'center'};
  position: ${({ $positionOverlay }) => $positionOverlay || 'fixed'};
  top: ${({ $topOverlay }) => $topOverlay || 0};
  right: ${({ $rightOverlay }) => $rightOverlay || 0};
  left: ${({ $leftOverlay }) => $leftOverlay || 0};
  bottom: ${({ $bottomOverlay }) => $bottomOverlay || 0};
`;


export const ModalBody = styled.div`
    width: ${({$widthBody}) => $widthBody || 'auto'};
    height: ${({$heightBody}) => $heightBody || 'auto'};
    border: ${({$borderBody}) => $borderBody || 'none'};
    border-radius: ${({$borderRadiusBody}) => $borderRadiusBody || '10px'};
    display: ${({$displayBody}) => $displayBody || 'flex'};
    align-items: ${({$alignItemsBody}) => $alignItemsBody || 'center'};
    justify-content: ${({$justifyContentBody}) => $justifyContentBody || 'center'};
    gap: ${({$gapBody}) => $gapBody || '0'};
    flex-direction: ${({$flexDirectionBody}) => $flexDirectionBody || 'flex'};
    background-color: ${({$backgroundColorModalBody}) => $backgroundColorModalBody || '#fff'};
    padding: ${($paddingModalBody)=>$paddingModalBody || 'auto'};
`