import Input from './Input';

const Texarea = Input.extend`
  min-height: 80px;
  width: 100%;
`

export default Texarea.withComponent('textarea');
