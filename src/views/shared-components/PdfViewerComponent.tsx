import axios from 'axios';
// import PDFViewer from 'pdf-viewer-reactjs'
import { useEffect, useRef, useState } from 'react';

// const ExamplePDFViewer = () => {

//   const [pdfBuff, setPdfBuff] = useState();
//   useEffect(() => {
//     axios.post("http://capstone-backend-0957-11-v2.herokuapp.com/system-admin/report" , {
//       "information": [
//         "DIAGNOSIS"
//       ],
//       "start": "2020-06-01T09:02:11.022Z",
//       "end": "2022-06-01T09:02:11.022Z"
//     } ).then((response) => setPdfBuff(response.data))
//   }, [])
//     return (
//       <embed
//       style={{
//               width: '100%',
//         height: '100%',
//       }}
//       type='application/pdf'
//       src={pdfBuff}
//       />
//     )
// }

// export default ExamplePDFViewer


export default function() {
  const containerRef = useRef(null);

  useEffect(() => {
    let instance, PSPDFKit: { load?: any; unload?: any; default?: any; Action?: any; Annotation?: any; AnnotationsWillChangeReason?: any; Bookmark?: any; ButtonFormField?: any; CheckBoxFormField?: any; ChoiceFormField?: any; Color?: any; ComboBoxFormField?: any; Comment?: any; CommentMarkerAnnotation?: any; CustomOverlayItem?: any; DrawingPoint?: any; EllipseAnnotation?: any; Font?: any; FormField?: any; FormFieldValue?: any; FormOption?: any; GoToAction?: any; GoToEmbeddedAction?: any; GoToRemoteAction?: any; HideAction?: any; HighlightAnnotation?: any; ImageAnnotation?: any; InkAnnotation?: any; Inset?: any; Instance?: any; InstantClient?: any; JavaScriptAction?: any; LaunchAction?: any; LineAnnotation?: any; LinkAnnotation?: any; List?: any; ListBoxFormField?: any; NamedAction?: any; NoteAnnotation?: any; PageInfo?: any; Point?: any; PolygonAnnotation?: any; PolylineAnnotation?: any; PublicTextSelection?: any; RadioButtonFormField?: any; Rect?: any; RectangleAnnotation?: any; RedactionAnnotation?: any; ResetFormAction?: any; SearchResult?: any; SearchState?: any; ShapeAnnotation?: any; SignatureFormField?: any; Size?: any; SquiggleAnnotation?: any; StampAnnotation?: any; StrikeOutAnnotation?: any; SubmitFormAction?: any; TextAnnotation?: any; TextFormField?: any; TextLine?: any; TextMarkupAnnotation?: any; URIAction?: any; UnderlineAnnotation?: any; UnknownAnnotation?: any; ViewState?: any; WidgetAnnotation?: any; };
    (async function() {
      PSPDFKit = await import("pspdfkit");
      instance = await PSPDFKit.load({
        container: containerRef.current,
        document: "/example.pdf",
        baseUrl: ``
      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(containerRef.current);
  }, []);

  return <div ref={containerRef} style={{ height: "100vh"}}/>

}
