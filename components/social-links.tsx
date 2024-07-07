'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServicestack} from '@fortawesome/free-brands-svg-icons';

const SocialMediaLinks = () => {
    return (
        <div className='flex flex-row gap-4'>
            <a href="http://localhost:8501" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faServicestack} size="2x" />
            </a>
        </div>
    );
};

export default SocialMediaLinks;
