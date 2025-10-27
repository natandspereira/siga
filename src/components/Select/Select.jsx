import * as Style from './Select.style';
import Select from 'react-select';

// Flags
import Brasil from '../../assets/img/Flags/flagBrasil.svg';
import Espanha from '../../assets/img/Flags/flagEspanha.svg';
import Eua from '../../assets/img/Flags/flagEua.svg';

export default function CustomSelect({ onChange }) {

  const options = [
    { value: 'pt', label: 'Pt-br', icon: Brasil },
    { value: 'en', label: 'En', icon: Eua },
    { value: 'es', label: 'Es', icon: Espanha },
  ];

  const formatOptionLabel = (option) => (
    <Style.ContainerSelect>
      <Style.DivImg>
        <Style.Img
          src={option.icon}
          alt={option.label}
        />
      </Style.DivImg>
      <Style.Span>{option.label}</Style.Span>
    </Style.ContainerSelect>
  );

  const customStyles = {
    option: (style) => ({
      ...style,
      display: 'flex',
      alignItems: 'center',
    })
  }

  return (
    <Select
      defaultValue={options[0]}
      options={options}
      formatOptionLabel={formatOptionLabel}
      onChange={onChange}
      styles={customStyles}
    />
  );
}
