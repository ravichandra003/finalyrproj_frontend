import React from 'react';
import './Header.css'; // Make sure to import your CSS file

const Header = () => {
	return (
		<div className="ui fixed menu">
			<div className="ui container">
				<h2 className="header-title">FileScanner</h2> {/* Added a class for styling */}
			</div>
		</div>
	);
};

export default Header;
