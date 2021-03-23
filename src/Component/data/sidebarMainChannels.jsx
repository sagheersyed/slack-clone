import ControlPointDuplicateSharpIcon from '@material-ui/icons/ControlPointDuplicateSharp';
import CommentIcon from '@material-ui/icons/Comment';
import AddIcon from '@material-ui/icons/Add';
import MoreIcon from '@material-ui/icons/More';
import GroupIcon from '@material-ui/icons/Group';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
// import BorderColorIcon from '@material-ui/icons/BorderColor';
// import ImportExportIcon from '@material-ui/icons/ImportExport';

export const sidebarDataItems = [
    {
        icon:<ControlPointDuplicateSharpIcon/>,
        text : "Thread",
        href : "/home"
    },
    {
        icon:<CommentIcon/>,
        text : "All Dms",
        href : "/about"
    },
    {
        icon:<AddIcon/>,
        text : "Mentions & Reactions",
        href : "/home"
    },
    {
        icon:<MoreIcon/>,
        text : "Save Items",
        href : "/login"
    },
    {
        icon:<GroupIcon/>,
        text : "Peoples & Groups",
        href : "#"
    },
    {
        icon:<TurnedInIcon/>,
        text : "More",
        href : "#"
    }
]