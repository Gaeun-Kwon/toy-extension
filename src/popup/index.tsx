/**
 * 팝업 페이지의 소스 코드
 */
import ReactDOM from 'react-dom/client';
import Popup from './Popup';

import '../assets/default.scss';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<Popup />);
