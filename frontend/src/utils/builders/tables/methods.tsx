
import { MethodList } from '@/hooks/dto/Imethod.dto';


interface IMethod {
	key: string;
	title: string;
	instrument: string;
	options: string;
}

export function useMethodTableData(isLoading: boolean, data: MethodList[]| undefined): { methodData:any } {
  
  let methodData: IMethod[] = [];
  if (!isLoading && data) {
		
		methodData = data.map(family => (
			{
				key: family.id,
				title: family.title,
				instrument: family.instrument.name,
				options: family.id
			}
			));
	}

  return { methodData }
}