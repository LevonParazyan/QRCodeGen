import qrCode from 'qrcode'

export const generateQR = async text => {
    try {
        return await qrCode.toDataURL(text)
    } catch (err) {
        console.error(err)
    }
}