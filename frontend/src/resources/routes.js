import {ImTree} from 'react-icons/im';
import {BsInboxes} from 'react-icons/bs';
import {IoDocumentOutline} from 'react-icons/io5';

export const routes = [
    {
        'path' : 'taskList',
        'name' : 'Task List',
        'icon' : <IoDocumentOutline/>
    },
    {
        'path' : 'addTask',
        'name' : 'Process',
        'icon' : <BsInboxes/>
    },
    {
        'path' : 'Test2',
        'name' : 'Test 2',
        'icon' : <ImTree/>
    }
];