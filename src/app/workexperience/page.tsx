import Image from "next/image"

const Workexperience = () => {

    return (
    <div className="about">
        <div className="we_p">
            <Image width={40} height={40} className="w-10 h-10 rounded-full" src="/images/hayden.png" alt=""/>
            <p className="we_top"><em>Hayden Diamond Bit Industries</em></p>
            <p>Vancouver, Canada</p>
            <p>CNC Programmer</p>
            <p>05/2022 - 08/2022 (Reason: Work Permit Expired)</p>
            <p>• Development of CNC-macro to machining GO-NOGO fixtures and reduce wasting of time creating a program per each one.</p>
            <p>• Improvement of machining reducing insert waste.</p>
            <p>• Provided training on machines to personnel. Explanations about basics concepts up to set-up CNC Turn Haas and Okuma (Inserts & Holders nomenclature, tool wear, tool nose-r compensation, TIP, modification of programs, properly use of coolant, measurement equipment).</p>
            <p>• Profile projector training.</p>
            <p>• Creation of Autonomous Maintenance Formats.</p>
            <br/>
        
            <Image width={30} height={30} className="w-10 h-10 rounded-full" src="/images/sargent.png" alt=""/>
            <p><em>Sargent Aerospace and Defense</em></p>
            <p>Guaymas, Son.</p>
            <p>CNC Technician NPI</p>
            <p>06/2018 - 06/2021</p>
            <p>• Development of mechanical parts from scratch to finish good.</p>
            <p>• Design 3D parts from client designs, this based on blueprint and converted to the company's own language.</p>
            <p>• Planning of labor track selecting each operation from the arrival of the raw material, how it will be machined in each operation and the selection of each machine (cnc lathe, cnc milling machine, waterjet, IDM, manual machines, etc).</p>
            <p>• Design and creation fixtures for parts to properly machine the part according to its machining stage, giving assembly instructions for a better set-up.</p>
            <p>• Development of programs CNC (Lathe, Mill, Waterjet, EDM).</p>
            <p>• Set-ups of the machines to machine the part numbers.</p>
            <p>• Assure first machining from the development of part as the developer himself performs the first set-ups and machining to solve the details and be able to provide better work instructions and advice.</p>
            <p>• Follow up manufacturing processes of parts until delivery production.</p>
            <p>• Troubleshooting in programs or machines during their development or in regular production, providing new ideas, solutions or more specific instructions.</p>
            <p>• Parts development improvements and time savings observing the behavior of the operations, both their set-ups and the machining and handling of the operators themselves.</p>
            <br/>
        
            <Image width={30} height={30} className="w-10 h-10 rounded-full" src="/images/wi.png" alt=""/>
            <p className="we_top"><em>Williams International | Guaymas, Son</em></p>
            <p>Internship Student</p>
            <p>07/2015 - 07/2016</p>
            <p>• Design and engineering area</p>
            <p>• Update planning, translate of instruction from english to spanish, update, upgrade and add instructions.</p>
            <p>• Update 3D models, changes 3D models based in specification of customer.</p>
            <p>• Design and creation of packaging (Waterjet), according to the 3D model.</p>
        </div>
    </div>    
    )
    }
      
export default Workexperience
