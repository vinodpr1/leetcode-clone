import { CircleCheckBig } from "lucide-react";
import React from "react";

const Description = () => {
  return (
    <div className="lang border border-gray-600 h-full overflow-auto rounded bg-[#212020]">
      <div className="sticky top-0 left-0 px-4 rounded-t py-1 text-sm bg-[rgb(49,48,48)]">
        <h1 className="font-normal">Description</h1>
      </div>
      <div className="px-4">
        <div className="py-4 flex justify-between">
          <h3 className="text-xl font-bold">1- Title of Question</h3>
          <div className="flex items-center gap-1">
            <span className="text-gray-400 text-sm">Solved</span>
            <CircleCheckBig className="h-4 w-4 text-green-500" />
          </div>
        </div>
        <button className="px-2 flex justify-center items-center bg-gray-700 rounded-full">
          <span className="text-green-400 text-sm font-thin">Tag Name</span>
        </button>
        <p className="py-4 text-sm text-gray-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          autem exercitationem velit iste blanditiis perspiciatis quia
          consectetur nobis! Molestias sint modi libero ducimus repudiandae
          excepturi, distinctio perferendis dolorem nihil quasi inventore rem
          nesciunt consequuntur aliquid atque praesentium debitis qui eaque
          nostrum natus quaerat nam ex pariatur? Quae rerum nihil velit beatae
          minima omnis dolores, iusto nulla labore maiores illo quisquam
          incidunt sed enim, nam ducimus eveniet odit eos aliquid voluptas ullam
          recusandae esse vel! Provident dicta explicabo, odio commodi dolor
          exercitationem repudiandae, beatae libero aliquid porro atque error
          sequi molestiae pariatur aut cumque! Eligendi explicabo amet ducimus
          illum magni reprehenderit molestias, iusto totam sequi sapiente
          numquam iste qui mollitia at suscipit a doloremque consectetur.
          Consequuntur repellendus deleniti incidunt illum. Accusantium error
          tempora, voluptas fuga id iure maiores adipisci est deleniti dicta
          neque architecto! Assumenda voluptate ipsum ea eveniet voluptatibus
          eum modi accusamus, provident, exercitationem omnis tempore sit nulla
          quasi debitis corrupti voluptates voluptas nisi! Dolorem perferendis,
          dolorum sint voluptatum consectetur reprehenderit nisi tempore id? Eos
          iusto a ducimus commodi dolores. In, repellendus odio nulla minima
          magni architecto repellat incidunt voluptate id numquam iste eligendi
          eaque adipisci placeat asperiores necessitatibus consectetur
          reiciendis explicabo hic voluptatum nisi, corrupti modi. Similique,
          exercitationem quasi? quasi debitis corrupti voluptates voluptas nisi!
          Dolorem perferendis, dolorum sint voluptatum consectetur reprehenderit
          nisi tempore id? Eos iusto a ducimus commodi dolores. In, repellendus
          odio nulla minima magni architecto repellat incidunt voluptate id
          numquam iste eligendi eaque adipisci placeat asperiores necessitatibus
          consectetur reiciendis explicabo hic voluptatum nisi, corrupti modi.
          Similique, exercitationem quasi? quasi debitis corrupti voluptates
          voluptas nisi! Dolorem perferendis, dolorum sint voluptatum
          consectetur reprehenderit nisi tempore id? Eos iusto a ducimus commodi
          dolores. In, repellendus odio nulla minima magni architecto repellat
          incidunt voluptate id numquam iste eligendi eaque adipisci placeat
          asperiores necessitatibus consectetur reiciendis explicabo hic
          voluptatum nisi, corrupti modi. Similique, exercitationem quasi?
        </p>
      </div>
    </div>
  );
};

export default Description;
