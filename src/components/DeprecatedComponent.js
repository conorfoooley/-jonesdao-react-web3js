import { BsInfoCircle } from "react-icons/bs";
import '../style/scss/deprecated.scss';
const Deprecated = () => {
    return (
        <div className="deprecated d-flex p-3">
            <div className="me-2">
                <BsInfoCircle />
            </div>
            <div>
                <div className="fw-bolder">Deprecated</div>
                <div>This vault will not be accepting new deposits, and is closing the current strategy.</div>
            </div>
        </div>
    );
}
export default Deprecated;