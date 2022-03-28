import React, { useEffect, useState, useRef} from 'react';
import Sidebar from './Sidebar';

const Dashboard = ({ children }) => {
	const [width, setWidth] = useState(window.innerWidth);
	const [showSidebar, setShowSidebar] = useState(false);

	const wrapperRef = useRef(null);
	const toggleRef = useRef(false);

	const breakpoint = 914;

	useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleWindowResize);
		if (width <= breakpoint) {
			setShowSidebar(false);
		} else {
			setShowSidebar(true);
		}
		// Return a function from the effect that removes the event listener
		return () => window.removeEventListener('resize', handleWindowResize);
	}, [width]);

	useEffect(()=> {
		// close sidebar if outside of the sidebar is clicked
		const closeSidebar =(e)=> {
			if (width <= breakpoint) {
				if (wrapperRef.current && !wrapperRef.current.contains(e.target) && showSidebar === true){
					setShowSidebar(false)
				}
			}
		}
		const toggleSidebar =(e)=> {
			if(toggleRef.current === e.target) setShowSidebar(!showSidebar)
			
		} 
		// Bind the event listener
		window.addEventListener("click", closeSidebar)
		window.addEventListener("click", toggleSidebar)
		// Unbind the event listener on clean up
		return ()=> {
			window.removeEventListener("click", closeSidebar)
			window.removeEventListener("click", toggleSidebar)
		} 
	}, [showSidebar, width])

	return (
		<>
			<div className='hamburger-container'>
				<input
					type='checkbox'
					id='checkbox2'
					className='checkbox2 visuallyHidden'
					ref={toggleRef}
				/>
				<label htmlFor='checkbox2'>
					<div className='hamburger hamburger2'>
						<span className='bar bar1'></span>
						<span className='bar bar2'></span>
						<span className='bar bar3'></span>
						<span className='bar bar4'></span>
					</div>
				</label>
			</div>
			{showSidebar && <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} forwardRef={wrapperRef}  />}
			<div className='main-content'>{children}</div>
		</>
	);
};

export default Dashboard;
