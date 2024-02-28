import './my-first-react.board.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'My First React',
    Board: () => (
        <div>
            <div>
                <div className="center">
                    <span>Published 20 Jan 2024 text</span>
                    <h1 className="h1">UX review presentations</h1>
                </div>
            </div>
        </div>
    ),
    isSnippet: true,
});
