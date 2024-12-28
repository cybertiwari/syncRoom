import '../App.css';
import { JaaSMeeting } from '@jitsi/react-sdk';
import { useParams } from "react-router-dom";
import Spinner from "../components/ui/Spinner";
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';


function Meeting() {
	const { roomId } = useParams();
	const navigate = useNavigate();
	const apiRef = useRef();
	const appID = import.meta.env.VITE_JAAS_APP_ID;

	return (
		<JaaSMeeting
			appId={appID}
			roomName={roomId}
			// jwt = { "jwt-token-here" }
			configOverwrite={{
				disableLocalVideoFlip: true,
				backgroundAlpha: 0.5
			}}
			interfaceConfigOverwrite={{
				VIDEO_LAYOUT_FIT: 'nocrop',
				MOBILE_APP_PROMO: false,
				TILE_VIEW_MAX_COLUMNS: 4
			}}
			spinner={Spinner}
			onApiReady={(externalApi) => { "..." }}
			onReadyToClose={() => {
				navigate('/end-call')
			}}
			getIFrameRef={(iframeRef) => {
				iframeRef.style.height = '100%'
			}}
		/>
	);
}

export default Meeting;