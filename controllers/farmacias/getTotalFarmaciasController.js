import fetchTotalFarmacias from "../../services/fetchTotalFarmacias.js";

async function getTotalFarmacias( req, res, next ) {

    try {

        const total = await fetchTotalFarmacias()

        res.status(200).json({
            success:"true",
            message:total
        })

    } catch (error) {

        next (error)

    }
}

export default getTotalFarmacias;