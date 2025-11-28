import { MapsList, MapsListsCategory } from './utils/DataModel'
import mapsLists from './utils/GoogleMapsLists.json'

export const TravelContainer = () => {

  return (
    <section className='mx-auto w-2/3 items-center' id="Travel">
      <h2 className='mx-auto md:mx-0 my-4'><strong>Google Maps Lists - Travel</strong></h2>
      <p>I like to make Google Maps lists of places I have visited, mostly documenting which places are worth visiting for their food or experiences. Feel free to use these lists for your own traveling.</p>
      {
        mapsLists.map(listGroup => {
          return <MapsListCategory lists={listGroup} />
        })
      }
    </section>
  )
}

interface MapsListCategoryProps {
  lists: MapsListsCategory
}

const MapsListCategory = (props: MapsListCategoryProps) => {

  return (
    <section className='w-full h-1/3 rounded-md flex flex-col md:flex-row justify-between mx-auto my-10'>
      <div className=' self-center'>
        <h3 className='pb-4 md:pb-0'><strong>{props.lists.name}</strong></h3>
        <p>{props.lists.description}</p>
      </div>

      <div className='w-full md:w-full flex flex-row flex-wrap justify-center self-center md:pt-0 pt-8 gap-x-2'>
        {
          props.lists.mapsLists.map(list => {
            return <MapsListCard list={list} />
          })
        }
      </div>
    </section>
  )
}

interface MapsListCardProps {
  list: MapsList
}

const MapsListCard = (props: MapsListCardProps) => {
  return (
    <div className='bg-[url("../public/assets/Maps.png")] text-primary m-2 py-3 px-4 rounded-full transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-103 focus:-translate-y-1 focus:scale-103 self-center text-center'>
      <a target="_blank" rel="noreferrer noopener" href={props.list.url}>
        <strong>
          {props.list.title}
        </strong>
      </a>
      {props.list.isNew ? <span className="absolute -top-2 rounded-full bg-yellow-300 text-yellow-800 text-xs font-medium me-2 px-2 py-0.5 dark:bg-yellow-900 dark:text-yellow-300">NEW</span> : null}
    </div>
  )
}
