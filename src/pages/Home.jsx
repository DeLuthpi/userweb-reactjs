/* eslint-disable react/prop-types */
import '../assets/css/home-style.css';
import Navbar from '../components/Navbar';
import SideNavbar from '../components/SideNav';
import { RingLoader } from 'react-spinners';
import { dataStatistic } from "../helpers/const";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
	return (
		<div className="main-page sidenav-show " id="main-page">
			<SideNavbar />
			<main className="main-section">
				<Navbar pages={'Home'} subPages={''} />
				<section className='home-section'>
					<div className="row">
						<div className="hsr-col">
							<div className="card card-plain hsr-card">
								<div className="card-body hsr-cb">
									<h2 className="hsr-cb-h2">Data Statistics</h2>
								</div>
							</div>
							<div className="hsr-row-flex">
								{dataStatistic.map(item => (
									<div className="card hsr-rflex-card" key={item?.id}>
										<div className="card-body">
											<div className="cb-rflex">
												<div className="hsr-rflex-icon-box">
													<FontAwesomeIcon icon={item?.icon} className='hsr-rflex-icon' size='lg' inverse />
												</div>
												<div className="hsr-rflex-col">
													<p className="hsr-rflex-cbtext">{item?.title}</p>
													<h5 className="hsr-rflex-cbtitle">{item?.data}</h5>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="react-animation">
						<div className="circles">
							<div></div>
							<div></div>
							<div></div>
							<span></span>
						</div>
						<RingLoader
							color={"#ffffff"}
							cssOverride={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '50' }}
							loading={true}
							size={100}
							aria-label="Loading Spinner"
							data-testid="loader"
						/>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Home;