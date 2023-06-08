'use client';
// import Link from 'next/link';
import { NavBar } from '@/components/NavBar';
import { ChartBar } from '@/components/ChartBar';
import { Theory } from '@/components/Theory';
import { Observations } from '@/components/Observations';
import { Footer } from '@/components/Footer';
import * as S from './styles';
import { useEffect, useState } from 'react';

export default function Dashboard() {
	const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 740px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 740px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);
	return (
		<>
			<NavBar isHome txt={'User L'}/>

				<S.Content className='grid-content-area'>
				<h1>General Information</h1>
					
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
				</S.Content>
				{
					matches ? <Theory instrument={'violin'}/>: <span />
					
				}
				<Observations user={'Instructor'}/>
				
			<Footer />
		</>
			
	);
}
