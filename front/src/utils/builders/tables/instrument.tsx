
import { InstrumentList } from '@/hooks/dto/Iinstrument.dto';


interface IInstrument {
	key: string;
	name: string;
	family: string;
	methods: number;
	options: string;
}

export function useInstrumentTableData(isLoading: boolean, data: InstrumentList[]): { instrumentData:any} {
  
  let instrumentData: IInstrument[] = [];
  if (!isLoading && data) {
		
		instrumentData = data.map(student => (
			{
				key: student.id,
				name: student.name,
				family: student.family.name,
				methods: student.totalMethods,
				options: student.id
			}
			));
	}

 

  return { instrumentData }
}