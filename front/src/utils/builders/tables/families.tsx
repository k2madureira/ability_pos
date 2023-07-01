
import { FamilyList } from '@/hooks/dto/Ifamily.dto';


interface IFamily {
	key: string;
	name: string;
	instruments: number;
	options: string;
}

export function useFamilyTableData(isLoading: boolean, data: FamilyList[]| undefined): { familyData:any} {
  
  let familyData: IFamily[] = [];
  if (!isLoading && data) {
		
		familyData = data.map(family => (
			{
				key: family.id,
				name: family.name,
				instruments: family.totalInstruments,
				options: family.id
			}
			));
	}

  return { familyData }
}