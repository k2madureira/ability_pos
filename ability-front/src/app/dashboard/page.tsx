'use client';
// import Link from 'next/link';
import { NavBar } from '@/components/NavBar';
import { ChartBar } from '@/components/ChartBar';
import { Observations } from '@/components/Observations';
import * as S from './styles';

export default function Dashboard() {
	return (
		<>
			<NavBar isHome txt={'User L'}/>
			<S.Content className='grid-content-area'>
			<h1>General Information</h1>
				{/* <div>
					<Link href="/signin">signin</Link>
				</div> */}
				<div className='total-numbers'>
					<ul>
						<li>
						<S.Icon 
							key={`icon-1`}
							className="Icon"
							src={`/images/icons/general/green-ellipse.svg`}
							width={9}
							height={9}
							alt={`green cicle`}
							/>
							<p>Groups:</p>
							<span>2</span>
						</li>
						<li>
							<S.Icon 
							key={`icon-1`}
							className="Icon"
							src={`/images/icons/general/green-ellipse.svg`}
							width={9}
							height={9}
							alt={`green cicle`}
							/>
							<p>Students:</p>
							<span>2</span>
						</li>
						<li>
						<S.Icon 
							key={`icon-1`}
							className="Icon"
							src={`/images/icons/general/green-ellipse.svg`}
							width={9}
							height={9}
							alt={`green cicle`}
							/>
							<p>Instruments:</p>
							<span>2</span>
						</li>
						<li>
						<S.Icon 
							key={`icon-1`}
							className="Icon"
							src={`/images/icons/general/green-ellipse.svg`}
							width={9}
							height={9}
							alt={`green cicle`}
							/>
							<p>Naipes:</p>
							<span>2</span>
						</li>
					</ul>
				</div>
				<ChartBar data={[2,4,5,1]}/>
				<Observations user={'Instructor'}/>
			</S.Content>
			
			
		</>
			
	);
}
