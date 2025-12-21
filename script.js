const YEAR = 2026;
const MONTH_NAMES = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];
const WEEKDAYS = ["L", "M", "X", "J", "V", "S", "D"];

/**
 * 🔐 Cifrado
 * Generar cadenas: btoa(unescape(encodeURIComponent(JSON.stringify({ title: "TÍTULO AQUÍ", body: "TEXTO AQUÍ" }))))
 */
const ENCRYPTED_DB = {
    "2026-01-01": "eyJ0aXRsZSI6IkHDsW8gTnVldm8iLCJib2R5IjoiSG95IGVtcGllemEgdW4gbnVldm8gYcOxby4gVW4gYcOxbyBjb24gcmV0b3MsIGNvbiBjYW1iaW9zIHkgY29uIG11Y2hhcyBjb3NhcyBwb3IgZGVzY3VicmlyLCB0YW50byBwYXJhIHRpIGNvbW8gcGFyYSBtw60uIFkganVudG8gY29uIGVzdGUgYcOxbyB0YW1iacOpbiBlbXBpZXphIGVzdGUgcGVxdWXDsW8gcHJveWVjdG8gcXVlIGhpY2UgcGFyYSB0aSwgY29tbyB1bmEgZm9ybWEgZGUgYWNvbXBhw7FhcnRlIHBvY28gYSBwb2NvLiBBaG9yYSBwb2RlbW9zIGNvbXByb2JhciBsYSBoaXDDs3Rlc2lzIGRlIHF1ZSBsYXMgY29zYXMgbcOhcyBib25pdGFzIG5vcyBwYXNhbiBhIGZpbmFsIGRlIGHDsW8gKGFob3JhIHNhYmVzIHBvciBxdcOpIHRlIGhhYmzDqSBkZSBlc28p4oCmIG9vb29vIHJlZnV0YXJsYSBtaWVudHJhcyBhZ3JlZ2Ftb3MgbnVldmFzIGNvc2FzIHF1ZSBub3MgcGFzZW4gZXN0ZSAyMDI2IPCfmYMuIFkgYnVlbm8sIHF1ZSBwYXNlIGxvIHF1ZSB0ZW5nYSBxdWUgcGFzYXIsIG1pZW50cmFzIHZpdmltb3MgZXN0ZSBhw7FvLiBUZSBxdWllcm8gZGVtYXNpYWRvIOKdpO+4jywgZXNwZXJvIHF1ZSBsbyBzZXBhcy4ifQ==",
    "2026-01-23": "eyJ0aXRsZSI6IjIzIGRlIGVuZXJvIiwiYm9keSI6IkhveSBoYXkgdW4gZGF0byBhc3Ryb27Ds21pY28gbXV5IGludGVyZXNhbnRlOiBsYSBMdW5hIHkgU2F0dXJubyBzZSBhbGluZWFyw6FuIGVuIGVsIGNpZWxvIGRlc2RlIG51ZXN0cm8gcHVudG8gZGUgdmlzdGEuIEFzw60gcXVlLCBwb2NvIGRlc3B1w6lzIGRlIHF1ZSBvc2N1cmV6Y2EgcHVlZGVzIG1pcmFyIGhhY2lhIGxhIEx1bmEgeSB1YmljYXIgdW4gcHVudGl0byBhbWFyaWxsbyBjZXJjYSwgZXNlIGVzIFNhdHVybm8uIFNhbMO6ZGFtZWxvIPCfmYMifQ==",
    "2026-02-01": "eyJ0aXRsZSI6IkZlYnJlcm8iLCJib2R5IjoiRW1waWV6YSBmZWJyZXJvLCBlbCBzZWd1bmRvIG1lcyBkZWwgYcOxbywgwr9ubyBzaWVudGVzIHF1ZSB0b2RvIGF2YW56YSB1biBwb3F1aXRvIG3DoXMgcsOhcGlkbz8gQ2FkYSB2ZXogZmFsdGEgbWVub3MgcGFyYSBxdWUgZW1waWVjZXMgY2xhc2VzIGVuIGxhIHVuaXZlcnNpZGFkLCB5IG5vIHRlIHZveSBhIG1lbnRpciwgbWUgcG9uZSBuZXJ2aW9zb+KApiBwb3JxdWUgYXVucXVlIHN1ZW5lIHJhcm8sIGRlIHZlcmRhZCBxdWlzaWVyYSBlc3RhciBhaMOtLCBwb2RlciBhY29tcGHDsWFydGUuIFPDqSBxdWUgbG8gdmFzIGEgaGFjZXIgaW5jcmXDrWJsZSwgcXVlIHRlIHZhIGEgaXIgYmllbiB5IHF1ZSBlc3RlIHZhIGEgc2VyIHVubyBkZSBlc29zIG1vbWVudG9zIMOpcGljb3MgZGUgdHUgdmlkYS4ifQ==",
    "2026-02-09": "eyJ0aXRsZSI6IkVsIGdyYW4gZMOtYeKApiBwb3IgbG9zIHByw7N4aW1vcyA1IGHDsW9zIiwiYm9keSI6IkRpb29vb29vb29vcy4gSG95IGVzIHR1IHByaW1lciBkw61hIGVuIGxhIHVuaXZlcnNpZGFkIPCfmIEuIE5vIHPDqSBjdcOhbmRvIGxlZXLDoXMgZXN0bywgcGVybyBzZWd1cm8geWEgZXN0w6FzIGVtb2Npb25hZGEsIGNvbiBuZXJ2aW9zIHkgY29uIG1pbCBjb3NhcyBlbiBsYSBjYWJlemEuIFF1aWVybyBxdWUgc2VwYXMgcXVlIGF1bnF1ZSBubyBwdWVkbyBlc3RhciBhbGzDrSBjb250aWdvLCBlc3RveSBwZW5zYW5kbyBlbiB0aSB5IHF1aWVybyBzYWJlciBhYnNvbHV0YW1lbnRlIHRvZG8uIEN1w6ludGFtZSBjw7NtbyB0ZSBmdWUsIGRlc2RlIGVsIHByaW1lciBwYXNvIGVuIGxhIHVuaXZlcnNpZGFkIGhhc3RhIGVsIMO6bHRpbW8gZGV0YWxsZSBkZSB0dSBkw61hLiBBdW5xdWUgbm8gcHVlZGEgdml2aXJsbyBkZSBjZXJjYSwgcXVpZXJvIHNlbnRpciBxdWUgZGUgYWxndW5hIGZvcm1hIGxvIGVzdGFtb3MgY29tcGFydGllbmRvLiBFc3RveSBzZWd1cm8gZGUgcXVlIHZhcyBhIGhhY2VyIHVuIHRyYWJham8gaW5jcmXDrWJsZSwgeSBubyBwdWVkbyBlc3BlcmFyIGEgZXNjdWNoYXIgdG9kbyBsbyBxdWUgdmFzIGEgdml2aXIuIn0=",
    "2026-02-14": "eyJ0aXRsZSI6IlNhbiBWYWxlbnTDrW4g8J+YtuKAjfCfjKvvuI8iLCJib2R5IjoiSG95IGVzIFNhbiBWYWxlbnTDrW4uLi4gUG9yIG9idmlhcyByYXpvbmVzIChvIGFsIG1lbm9zIGRlbCBtb21lbnRvIGVuIHF1ZSBlc3RveSBlc2NyaWJpZW5kbyBlc3RvKSBubyBxdWllcm8gaGFjZXJsbyBtw6FzIGdyYW5kZSBkZSBsbyBxdWUgZXMsIHBlZWVlcm8gZGVzcHXDqXMgZGUgcGVuc2FyLCB0YW1wb2NvIHF1aWVybyBkZWphcmxvIHBhc2FyIGNvbW8gc2kgbmFkYS4gTWUgZ3VzdGEgZXN0ZSBkw61hIGNvbW8gZXhjdXNhIHBhcmEgZGVjaXJ0ZSBxdWUgbWUgZW5jYW50YSB0ZW5lcnRlIGVuIG1pIHZpZGEsIGhhYmxhciBjb250aWdvIHkgY29tcGFydGlyIG1vbWVudG9zLCBpbmNsdXNvIGxvcyBtw6FzIHNpbXBsZXMuIFkgYnVlbm8sIGRlamFuZG8gcXVlIHBhc2UgbG8gcXVlIHRlbmdhIHF1ZSBwYXNhci4gTWllbnRyYWFhcy4uLiBzaSBubyB0aWVuZXMgcGxhbmVzIGhveXl5eXkuLi4gcXVpZXJlcyBoYWNlciBhbGdvPz8gVGFsIHZlei4uLiB2ZXIgdW5hIHBlbGk/PyAoU2kgbm8gc2UgcHVlZGUgbm8gcGFzYSBuYWRhLCB0YWwgdmV6IHlvIG1pc21vIG5vIHB1ZWRhIHBlcm8sIHF1ZSBubyBzZSBkaWdhIHF1ZSBubyBwcmVndW50w6ksIHkgc2lubyBsbyBwb3Nwb25lbW9zIHBhcmEgb3RybyBkw61hLCBzaSBxdWllcmVzKSDwn5mDIn0=",
    "2026-02-16": "eyJ0aXRsZSI6IlR1IGTDrWEuIFR1IGN1bXBsZWHDsW9zLiDwn6WzIiwiYm9keSI6IkhveSBjdW1wbGVzIDE3LCB5IG5vIHBvZMOtYSBkZWphciBwYXNhciBlc3RlIGTDrWEgc2luIGVzY3JpYmlydGUgYWxnbyBlc3BlY2lhbC4gTWUgZ3VzdGEgcGVuc2FyIGVuIHRpIGp1c3RvIGVuIGVzdGUgbW9tZW50bywgZW4gY8OzbW8gZXN0w6FzLCBlbiBsbyBxdWUgdGllbmVzIGVuIGxhIGNhYmV6YSBob3kgeSBlbiBsYXMgcGVxdWXDsWFzIGNvc2FzIHF1ZSB0ZSBoYWNlbiBzb25yZcOtci4gUG9yIGZpbiB2b2x2ZW1vcyBhIHRlbmVyIGxhIG1pc21hIGVkYWQsIGF1bnF1ZSBzZWEgc29sbyBwb3IgdW4gdGllbXBvLi4uIGphamFqYWphIPCfmYMuIE9qYWzDoSBlc3RlIG51ZXZvIGHDsW8gZGUgdHUgdmlkYSBtZSBwZXJtaXRhIHNlZ3VpciBhY29tcGHDscOhbmRvdGUsIHNlZ3VpciBjb21wYXJ0aWVuZG8gbW9tZW50b3MgY29udGlnbyB5IHZlciBxdcOpIGNvc2FzIGJvbml0YXMgbm9zIHRyYWUuIE5vIHPDqSBleGFjdGFtZW50ZSBxdcOpIHZhIGEgcGFzYXIgKG8gc2kgeWEgaGEgcGFzYWRvKSwgcGVybyBzw60gc8OpIGxvIHF1ZSBzaWVudG8gaG95LCB5IHBvciBlc28gcXVlcsOtYSBkZWPDrXJ0ZWxvIGVuIHVuIGTDrWEgY29tbyBlc3RlOiB0ZSBxdWllcm8gZGVtYXNpYWRvIOKdpO+4jy4ifQ==",
    "2026-03-01": "eyJ0aXRsZSI6Ik1hcnpvIiwiYm9keSI6IkhveSBlbXBpZXphIG1hcnpvLCB5YSB2YW1vcyB1biBwb3F1aXRvIG3DoXMgbWV0aWRvcyBlbiBlbCBhw7FvLiBZYSBwYXNhcm9uIGxvcyBuZXJ2aW9zLCBsYXMgcHJpbWVyYXMgdmVjZXMgZGUgbGEgdW5pdmVyc2lkYWQsIHRvZG8gdG9tYSBmb3JtYS4gU29sbyBxdWVyw61hIGVzdGFyIGFxdcOtLCBhY29tcGHDscOhbmRvdGUgdW4gbWVzIG3DoXMg8J+Zgy4ifQ==",
    "2026-03-14": "eyJ0aXRsZSI6IjE0IGRlIG1hcnpvIiwiYm9keSI6IkhveSBlcyBlbCBkw61hIG7Dum1lcm8gNzMgZGUgbG8gcXVlIHZhIGRlIGHDsW8uIMK/U2FiZXMgcXVlIHRpZW5lIGRlIGVzcGVjaWFsIGVzbz8gRWwgbsO6bWVybyA3MyBlcyBlbCB2aWfDqXNpbW8gcHJpbWVyICgjIDIxKSBuw7ptZXJvIHByaW1vLCBlbCBpbnZlcnNvIGRlIDczOiAzNyBlcyBlbCBkw6ljaW1vIHNlZ3VuZG8gKCMgMTIpIG7Dum1lcm8gcHJpbW8uIFkgZWwgbsO6bWVybyAyMSwgZXMgbGEgbXVsdGlwbGljYWNpw7NuIGRl4oCmIDcgeCAzIPCfmLEuIEFkZW3DoXMsIGVuIGJpbmFyaW8gZWwgbsO6bWVybyA3MyBlcyB1biBwYWzDrW5kcm9tbzogMTAwMTAwMS4gRGUgaGVjaG8sIGhheSB1bmEgaW52ZXN0aWdhY2nDs24gcXVlIGRlbXVlc3RyYSBxdWUgZXN0ZSBlcyBlbCDDum5pY28gbsO6bWVybyBxdWUgY3VtcGxlIGNvbiBlc2FzIHByb3BpZWRhZGVzLCBzZSBsbGFtYSBQcm9vZiBvZiB0aGUgU2hlbGRvbiBDb25qZWN0dXJlLiJ9",
    "2026-03-20": "eyJ0aXRsZSI6IjIwIGRlIG1hcnpvIiwiYm9keSI6IsK/U2FiZXMgcXXDqSBkw61hIGVzIGhveT8gSG95IGVzIGVsIGVxdWlub2NjaW8gZGUgbWFyem8sIHVubyBkZSBkb3MgZMOtYXMgZW4gbG9zIHF1ZSBlbCBkw61hIHkgbGEgbm9jaGUgZHVyYW4gZXhhY3RhbWVudGUgbG8gbWlzbW8sIHkgZXN0w6EgZW4gZXN0ZSBjYWxlbmRhcmlvIHBvcnF1ZSBuZWNlc2l0YWJhIGxsZW5hcmxvIGNvbiBkw61hcyBlbiBxdWUgcHVkaWVyYSBkZWphcnRlIG1lbnNhamVzIHkgbm8gc29sbyBmZWNoYXMgZGUgY29zYXMgcXVlIGhlbW9zIHZpdmlkby4uLiBqYWphamFqYSDwn5mDLiBFbiBmaW4sIG1lIHBhcmVjw61hIHVuIGJ1ZW4gZMOtYSBwYXJhIGRlamFydGUgdW4gbWVuc2FqZSB5IHJlY29yZGFydGUgcXVlIGhheSBhbGd1aWVuIGNvbW8gYSA3MDAga20gcXVlIHRlIHF1aWVyZSBkZW1hc2lhZG8uIn0=",
    "2026-04-01": "eyJ0aXRsZSI6IkFicmlsIiwiYm9keSI6IkVtcGllemEgYWJyaWwgeSwgdMOpY25pY2FtZW50ZSwgZWwgYcOxbyBlbnRyYSBlbiBzdSBzZWd1bmRvIGN1YXJ0by4gTm8gc8OpIHNpIGVzbyBzaWduaWZpcXVlIGFsZ28sIHBlcm8gbWUgcGFyZWPDrWEgdW5hIGJ1ZW5hIGV4Y3VzYSBwYXJhIGVzY3JpYmlydGUgeSBkZXNlYXJ0ZSBxdWUgZXN0ZSBtZXMgdGUgdmF5YSBiaWVuLiDwn5mDIn0=",
    "2026-04-11": "eyJ0aXRsZSI6IjExIGRlIGFicmlsIiwiYm9keSI6IkhveSBzZSBjdW1wbGVuIGV4YWN0YW1lbnRlIGRvcyBhw7FvcyBkZXNkZSBsYSBwcmltZXJhIHZleiBxdWUgcmVhbG1lbnRlIGhhYmxhbW9zIChTw60sIGJ1c3F1w6kgcXXDqSBkw61hIGVyYSBzb2xvIHBhcmEgcG9uZXJsbyBhcXXDrSkuIEZ1ZSBlc2EgdmV6IGVuIGNsYXNlIHF1ZSBub3MgdG9jw7MganVudG9zIGVuIHVuIGJyZWFrb3V0IHJvb20sIGNvbiBTb2bDrWEsIGN1YW5kbyBtZSBwcmVndW50YXN0ZSBwb3IgYWxnbyBxdWUgeW8gbGUgaGFiw61hIGRpY2hvIGEgUGF1bGEgc29icmUgdW5vcyBleMOhbWVuZXMgZGVsIEFDVC4gTnVuY2EgdGUgaGFiw61hIGRpY2hvIHF1ZSBoYWLDrWEgc2lkbyBlc3RlIGTDrWEsIHBlcm8gbWUgcGFyZWPDrWEgYm9uaXRvIGRlamFybG8gYXF1w60uIE5vIHBvcnF1ZSBmdWVyYSBhbGdvIGdyYW5kZSBlbiBlc2UgbW9tZW50bywgc2lubyBwb3JxdWUsIHNpbiBzYWJlcmxvLCBhaMOtIGVtcGV6w7MgYWxnby4ifQ==",
    "2026-04-26": "eyJ0aXRsZSI6IjI2IGRlIGFicmlsIiwiYm9keSI6IkVzdGFiYSBwZW5zYW5kbyBlbiBhbGdv4oCmIEVuIGVzdGUgY2FsZW5kYXJpbyBoYXkgbXVjaG9zIGTDrWFzIGVzcGVjaWFsZXMgcXVlIGhlbW9zIHZpdmlkbyB0w7ogeSB5bywgcGVybywgc2kgbG8gcGllbnNhcywgbm8gdG9kb3MgbG9zIGTDrWFzIHNvbiBlc3BlY2lhbGVzIGRlIHBvciBzw607IGEgdmVjZXMgcGFzYW4gY29zYXMgcXVlIHVubyBubyBxdWllcmUgcXVlIHBhc2VuLCB5IGhheSBkw61hcyBxdWUgc29uIHNpbXBsZW1lbnRlIG1hbG9zLiBFbCBwdW50byBlcyBxdWUgbm8gaGF5IG5pbmfDum4gaW5ncmVkaWVudGUgc2VjcmV0byBwYXJhIHF1ZSB1biBkw61hIHNlYSBlc3BlY2lhbDogbXVjaGFzIHZlY2VzIGxvIHF1ZSBsbyBoYWNlIGRpc3RpbnRvIHNvbiBsYXMgcGVxdWXDsWFzIGNvc2FzIHF1ZSBwYXNhbi4gUG9yIGVzbywgYXVucXVlIGVuIGVzdGUgY2FsZW5kYXJpbyBoYXkgZMOtYXMgaW1wb3J0YW50ZXMsIGVzbyBubyBzaWduaWZpY2EgcXVlIGxvcyBkw61hcyBcInZhY8Otb3NcIiBubyBsbyBzZWFuLCBwb3JxdWUgdG9kb3MgdGllbmVuIGxhIG9wb3J0dW5pZGFkIGRlIHNlciBlc3BlY2lhbGVzLiBZIHlvIGNyZW8gcXVlIHRvZG9zIGxvIHNvbiwgcG9ycXVlIGxvcyBjb21wYXJ0byBjb250aWdvLiJ9",
    "2026-05-01": "eyJ0aXRsZSI6Ik1heW8iLCJib2R5IjoiQ2FzaSBsbGVnYW1vcyBhIGxhIG1pdGFkIGRlbCBhw7Fvb29vb28sIHVzaCwgY29tbyBwYXNhIGVsIHRpZW1wby4gVGUgcXVpZXJvb28g8J+Zgywgc29sbyBxdWVyw61hIGRlY2lyIGVzby4ifQ==",
    "2026-05-18": "eyJ0aXRsZSI6IjE4IGRlIG1heW8iLCJib2R5IjoiTm90aGluZyBzcGVjaWFsIHRvZGF5Li4uIGp1c3QgZHJvcHBpbmcgYnkgdG8gcmVtaW5kIHlvdSB0aGF0IEkgbGlrZSB5b3UuLi4gYSBsb3Qg8J+YtuKAjfCfjKvvuI8uIn0=",
    "2026-06-01": "eyJ0aXRsZSI6Ikp1bmlvIiwiYm9keSI6IkFhYWFhYWFhYSwgeWEgY2FzaSB0ZXJtaW5hbW9zIG51ZXN0cm8gcHJpbWVyIHNlbWVzdHJlIGVuIGxhIHVuaXZlcnNpZGFkLiBUb2RhdsOtYSBxdWVkYW4gZXjDoW1lbmVzIHkgZW50cmVnYXMsIHBlcm8gc2FiZXIgcXVlIGVzdGFtb3MgYSBuYWRhIGRlIHRlcm1pbmFyIGVsIHByaW1lciBwYXNvIHNlIHNpZW50ZSBcInVmZlwiLiBIYWNlIG5vIHRhbnRvIHRvZG8gZXJhIG51ZXZvIHkgYWhvcmEgeWEgaGFibGFtb3MgZGUgdmFjYWNpb25lcywgZGUgZGVzY2Fuc28sIGRlIGJhamFyIHVuIHBvY28gZWwgcml0bW8uIFkgbm8gc8OpLCBzZSBzaWVudGUgYmllbiBzYWJlciBxdWUgbG8gZXN0YW1vcyBwYXNhbmRvIGFsIG1pc21vIHRpZW1wby4g8J+ZgyJ9",
    "2026-06-06": "eyJ0aXRsZSI6IkhveSBjdW1wbGUgYWxndWllbiBlc3BlY2lhbCBwYXJhIHRpIChjcmVvKSDwn5mDIiwiYm9keSI6IkhveSBlcyBtaSBjdW1wbGVhw7Fvcy4gSG95IGN1bXBsbyAxOC4gT2ZpY2lhbG1lbnRlIG1lIHZ1ZWx2byB1biBhZHVsdG8sIGF1bnF1ZSBob25lc3RhbWVudGUgbm8gbWUgc2llbnRvIGRpc3RpbnRvIGEgYXllci4gSWd1YWwgbm8gdGUgdm95IGEgbWVudGlyLCBtZSBkYSB1biBwb2NvIGRlIG5lcnZpb3MsIHBvcnF1ZSBzdWVuYSBtw6FzIGdyYW5kZSBkZSBsbyBxdWUgZXMuIEVuIG1lZGlvIGRlIGVzdGUgZMOtYSBlc3BlY2lhbCwgY3JlbyBxdWUgaGF5IGFsZ28gcXVlIGRlYm8gZGVjaXJ0ZTogUGVuc8OhbmRvbG8gYmllbiwgY3JlbyBxdWUgZWwgbWVqb3IgcmVnYWxvIHF1ZSBwb2Ryw61hIHJlY2liaXIgaG95IG5vIHRpZW5lIHF1ZSB2ZXIgY29uIGFsZ28gbWF0ZXJpYWwuIFBhcmEgbcOtIGVzIHBvZGVyIHRlbmVydGUgZW4gbWkgdmlkYSwgY29tcGFydGlyIGNvbnRpZ28sIGFjb21wYcOxYXJub3MgeSB2ZXIgcXXDqSBwYXNhIGVudHJlIG5vc290cm9zLiBUZSBxdWllcm8gZGVtYXNpYWRvIOKdpO+4jywgeSBlc28gc8OtIGVzIGFsZ28gcXVlIHRlbmdvIG11eSBjbGFyby4ifQ==",
    "2026-06-21": "eyJ0aXRsZSI6IjIxIGRlIGp1bmlvIiwiYm9keSI6IkhveSBlcyBlbCBzb2xzdGljaW8gZGUganVuaW8sIGVsIGTDrWEgbcOhcyBsYXJnbyBkZWwgYcOxby4gQXF1w60gZW4gQ29sb21iaWEgZXNvIGNhc2kgbm8gc2Ugbm90YeKApiBwZWVlZWVybyBlbiBlbCBNSVQsIGhveSBlbCBzb2wgc2FsZSBtw6FzIG8gbWVub3MgYSBsYXMgY2luY28geSBwaWNvIGRlIGxhIG1hw7FhbmEgeSBzZSBlc2NvbmRlIGNhc2kgYSBsYXMgb2NobyB5IG1lZGlhIGRlIGxhIG5vY2hlLiBFc28gc29uIG3DoXMgZGUgcXVpbmNlIGhvcmFzIGRlIGTDrWEuIEVzIHVuIGx1Z2FyIGFsIHF1ZSBsb3MgZG9zIG1pcmFtb3MsIHkgbm8gc8OpLCBtZSBpbWFnaW5vIGPDs21vIHNlcsOtYSBwYXNhciB1biBkw61hIGFzw60gZGUgbGFyZ28ganVudG9zLiBTaSB5YSBsYSBwYXNhbW9zIGJpZW4gY29uIG1lbm9zIGhvcmFzLCBpbWFnw61uYXRlIGNvbiBxdWluY2UuIPCfmYMifQ==",
    "2026-07-01": "eyJ0aXRsZSI6Ikp1bGlvIiwiYm9keSI6IkJ1ZW5vb28sIGVzdGFtb3MgZGUgdmFjYWNpb25lcyBqYWphamFqYWphLiBBbCBmaW4uIFRhbCB2ZXogYWhvcmEgcG9kYW1vcyBwYXNhciB1biBwb3F1aXRvIG3DoXMgZGUgdGllbXBvIGp1bnRvcywgc2kgcXVpZXJlcyDwn5mDIn0=",
    "2026-07-20": "eyJ0aXRsZSI6IjIwIGRlIGp1bGlvIiwiYm9keSI6IvCfmLbigI3wn4yr77iPIEhveSBlcyB1biBkw61hIGVzcGVjaWFsLi4uIHPDrSwgZW4gdGVvcsOtYSBlcyBsYSBpbmRlcGVuZGVuY2lhIGRlIENvbG9tYmlhLCBwZXJvIHNpIHBpZW5zYXMgcXVlIHBvciBlc28gbG8gcHVzZSBhcXXDrSwgZXN0w6FzIG11eSBlcXVpdm9jYWRhIG1pIGVzdGltYWRhIPCfmYMuIEhhY2UgdW4gYcOxbyBleGFjdGFtZW50ZSwgdW4gZMOtYSBjb21vIGhveSwgdGVybWluYW1vcyBlbCBwcm95ZWN0byBkZSBsYXMgw7NyYml0YXMuIEVzZSBwcmltZXIgcHJveWVjdG8gcXVlLCBzaW4gZGFybm9zIGN1ZW50YSwgc2Vyw61hIGVsIGluaWNpbyBkZSBlc3RhIGhpc3RvcmlhLiJ9",
    "2026-08-01": "eyJ0aXRsZSI6IkFnb3N0byIsImJvZHkiOiJFbXBlesOzIGFnb3N0byB5eXl5IHlhIGNhc2kgdGVuZW1vcyBxdWUgdm9sdmVyIGEgbGEgdW5pdmVyc2lkYWQuIEVtcGV6YXIgbnVlc3RybyBzZWd1bmRvIHNlbWVzdHJlLiDCv0Vtb2Npb25hZGEgcG9yIHZvbHZlciBvdHJhIHZlej8g8J+YgSJ9",
    "2026-08-17": "eyJ0aXRsZSI6IjE3IGRlIGFnb3N0byIsImJvZHkiOiJIb2xhYWFhYWEg8J+YgS4gwr9Dw7NtbyB2YXM/IMK/UXXDqSB0YWwgdHUgZMOtYT8gwr9RdcOpIGhhcyBoZWNobz8gwr9Ub21hc3RlIGFndWE/IGphamFqYWphamEgbGl0byDwn5mDLiJ9",
    "2026-09-01": "eyJ0aXRsZSI6IlNlcHRpZW1icmUiLCJib2R5IjoiT2ZpY2lhbG1lbnRlIGhveSB5YSBoYW4gcGFzYWRvIGRvcyB0ZXJjaW9zIGRlIGHDsW8sIHlhIHByw6FjdGljYW1lbnRlIHNlIHZhIGEgYWNhYmFhYWFhciBqYWphamFqYS4gTm8gc8OpIHF1w6kgZGVjaXIgYXF1w60sIHBlcm8gYXBhcnRlIGRlIHF1ZSB0ZW5nYW1vcyB1biBpbmNyZcOtYmxlIG1lcyB5IGhhZ2Ftb3MgbGxhbWFkYXPigKYgdGUgcXVpZXJvIPCfmYMuIn0=",
    "2026-09-22": "eyJ0aXRsZSI6IjIyIGRlIHNlcHRpZW1icmUiLCJib2R5IjoiSG95IGVzIGVsIGVxdWlub2NjaW8gZGUgc2VwdGllbWJyZS4gQSBwYXJ0aXIgZGUgYWhvcmEsIHBvY28gYSBwb2NvLCBsb3MgZMOtYXMgZW1waWV6YW4gYSBkdXJhciBtZW5vcyB5IGxhcyBub2NoZXMgdW4gcG9jbyBtw6FzLiBMbyBxdWUgc2lnbmlmaWNhIHF1ZSBoYXkgbcOhcyB0aWVtcG8gcGFyYSBxdWUgbm9zIHRyYXNub2NoZW1vcyB5IG5vIG1lIGRlamVzIGRvcm1pciDwn5mDLiJ9",
    "2026-09-24": "eyJ0aXRsZSI6IjI0IGRlIHNlcHRpZW1icmUuIE5vcyBjb25vY2ltb3MuIiwiYm9keSI6IiBCdWVub29vLCBjcmVvIHF1ZSB0b2RvcyBzYWJlbW9zIHBvciBxdcOpIGVzdGUgZMOtYSBlc3TDoSBhcXXDrSwgbm8/IEhveSBlcyB1bmEgZmVjaGEgaW1wb3J0YW50ZSBwb3IgdmFyaWFzIHJhem9uZXMuIFVuIGTDrWEgY29tbyBob3ksIGhhY2UgMiBhw7FvcywgdGUgZXNjcmliw60gcG9yIHByaW1lcmEgdmV6LCB5IGRpZ2Ftb3MgcXVlIGVzZSBmdWUgZWwgaW5pY2lvIGRlIG51ZXN0cmEgaGlzdG9yaWEuLi4gUGVybywgdGFsIHZleiBhbGdvIHF1ZSBubyBzYWLDrWFzLCBlcyBxdWUganVzdG8gaG95LCBlbCBhw7FvIHBhc2FkbywgZnVlIGN1YW5kbyBtZSBkaWppc3RlIHF1ZSBzZW50w61hcyBxdWUgbm8gdGVuw61hcyB0YWxlbnRvcy4gQnJvbWVhc3RlIGNvbiBxdWUgcG9kcsOtYSBkZWNpcnRlIHVubyBwb3IgY2FkYSBsZXRyYSwgeSBhbCBkw61hIHNpZ3VpZW50ZSB0ZXJtaW7DqSBoYWNpw6luZG90ZSB1bmEgcMOhZ2luYSBlbnRlcmEgcGFyYSBkZW1vc3Ryw6FydGVsby4gUXVpZXJvIHF1ZSBzZXBhcyBxdWUgdGUgcXVpZXJvIGRlbWFzaWFkbyDinaTvuI8sIHkgZXNwZXJvIHNlZ3VpciBhw7FhZGllbmRvIG3DoXMgcMOhZ2luYXMgYWwgbGlicm8gZGUgbWkgdmlkYSwgY29udGlnby4ifQ==",
    "2026-10-01": "eyJ0aXRsZSI6Ik9jdHVicmUiLCJib2R5IjoiU2kgdGUgZGlnbyBsYSB2ZXJkYWQsIGEgcGFydGlyIGRlIGFob3JhIGVtcGllemEgdW5hIHBhcnRlIGRlbCBhw7FvLCB5IGRlIGVzdGUgY2FsZW5kYXJpbywgcXVlIG1lIGVuY2FudGEuIFBvcnF1ZSB2aWVuZW4gbXVjaG9zIG1vbWVudG9zLCByZWN1ZXJkb3MgeSBjb3NhcyBxdWUgZGUgdmVyZGFkIGhlbW9zIHZpdmlkbyBqdW50b3MsIGRlIGVzYXMgcXVlIGN1YW5kbyB1bm8gbWlyYSBoYWNpYSBhdHLDoXMgc2UgZGEgY3VlbnRhIGRlIGN1w6FudG8gcGFzw7MgZW4gdGFuIHBvY28gdGllbXBvLiBFcyBtdXkgYm9uaXRvLCBwb3JxdWUgZXMgbGEgcGFydGUgZW4gbGEgcXVlIG3DoXMgcmVjdWVyZG8gcXVlIGRlIHZlcmRhZCB0ZSBoZSBwb2RpZG8gdmVyIGVuIGxhIHZpZGEgcmVhbCwgYWJyYXphcnRlIHkgbW9zdHJhcnRlIGxvIHF1ZSBzaWVudG8gbm8gc29sbyBhIHRyYXbDqXMgZGUgdW5hIHBhbnRhbGxhIG8gZGUgdW4gbWVuc2FqZS4g8J+ZgyJ9",
    "2026-10-18": "eyJ0aXRsZSI6IjE4IGRlIG9jdHVicmUiLCJib2R5IjoiRnVlIHVuIGTDrWEgcmFyby4gVGVuw61hIG5lcnZpb3MsIG5vIHNhYsOtYSBtdXkgYmllbiBxdcOpIGVzcGVyYXIsIHkgdG9kbyBzZSBzZW50w61hIHVuIHBvY28gaXJyZWFsLiBIaWNpbW9zIGVsIEFDVCwgc8OtLCBwZXJvIGxvIG3DoXMgaW1wb3J0YW50ZSBmdWUgdmVydGUgcG9yIHByaW1lcmEgdmV6IGVuIHBlcnNvbmEuIERlc3B1w6lzIGRlIHRhbnRvIHRpZW1wbyBoYWJsYW5kbywgcG9kZXIgZXN0YXIgY29udGlnbyBhaMOtLCBkZSB2ZXJkYWQsIGZ1ZSBpbmNyZcOtYmxlLiBGdWUgdW5vIGRlIGVzb3MgZMOtYXMgcXVlIHNlIHF1ZWRhbiBndWFyZGFkb3MsIGluY2x1c28gY29uIG1pIFwibW9ub25ldXJvbmFsaXNtb1wiLiJ9",
    "2026-10-24": "eyJ0aXRsZSI6IjI0IGRlIG9jdHVicmUiLCJib2R5IjoiSG95LCBoYWNlIHVuIGHDsW8sIHRlIGRpamUgbGEgdmVyZGFkLiBUZSBkaWplIHF1ZSBtZSBndXN0YWJhcyB5IHRvZG8gbG8gcXVlIHNlbnTDrWEgcG9yIHRpLiBZIHRhbWJpw6luIGZ1ZSBhbGdvIG11eSBlbW9jaW9uYW50ZSBjdWFuZG8gbWUgZGlqaXN0ZSBsbyBtaXNtbywgbm8gdGUgaW1hZ2luYXMgY8OzbW8gc2FsdMOpIGRlIGxhIGVtb2Npw7NuIGphamFqYWphLiBObyBzw6kgY8OzbW8gbG8gc2llbnRhcywgdGFsIHZleiBubyB0ZSBwYXJlemNhIGFsZ28gZ2lnYW50ZSBvIGltcG9ydGFudGUgeSBzYWJlcyBxdWUgbWUgZW1vY2lvbm8gbXVjaG8g8J+YtuKAjfCfjKvvuI8sIHBlcm8gbG8gcHVzZSBhcXXDrSBwb3JxdWUgcGFyYSBtw60gZXMgZXNwZWNpYWwsIHBvcnF1ZSBzZW50aXIgc2VudGltaWVudG9zIHRhbiBncmFuZGVzIHBvciBhbGd1aWVuIGVzIGluY3Jlw61ibGUuIPCfmYMifQ==",
    "2026-10-31": "eyJ0aXRsZSI6IkhhbGxvd2VlbiIsImJvZHkiOiJIb3kgZXMgSGFsbG93ZWVuIHnigKYgYSBkaWZlcmVuY2lhIGRlIGxvIHF1ZSB0ZSBkaWplIGVuIGxvcyBwYXBlbGl0b3MsIGhveSBzw60gZXMgdW4gYnVlbiBkw61hIHBhcmEgZGlzZnJhemFydGUgZGUgbGEgcGVyc29uYSBxdWUgbcOhcyBxdWllcm8gZW4gZXN0ZSBtdW5kby4g8J+ZgyJ9",
    "2026-11-01": "eyJ0aXRsZSI6Ik5vdmllbWJyZSIsImJvZHkiOiJTb2xvIGRvcyBtZXNlc2l0b3MgcGFyYSBxdWUgc2UgdnVlbHZhIGEgYWNhYmFyIGVsIGHDsW9vb29vb28uIEPDs21vIHBhc2EgZWwgdGllbXBvLiJ9",
    "2026-11-03": "eyJ0aXRsZSI6IjMgZGUgbm92aWVtYnJlIiwiYm9keSI6IkhveSwgaGFjZSB1biBhw7FvLCBlbXBlY8OpIGVsIHBlcXVlw7FvIHByb3llY3RvIGRlIGxvcyAzMDAgcGFwZWxpdG9zLiBFc3Blcm8gdGUgaGF5YSBndXN0YWRvLiDwn5mDIn0=",
    "2026-11-28": "eyJ0aXRsZSI6IjI4IGRlIG5vdmllbWJyZSIsImJvZHkiOiLCv1B1ZWRlcyBjcmVlciBxdWUgeWEgaGEgcGFzYWRvIHVuIGHDsW8gZGVzZGUgcXVlIHRlIGdyYWR1YXN0ZSBkZWwgY29sZWdpbz8gWSB0b2RhcyBsYXMgY29zYXMgcXVlIGhhbiBwYXNhZG8gZGVzZGUgZW50b25jZXMsIGVudHJhbW9zIGEgbGEgdW5pdmVyc2lkYWQgcG9yIERpb29vb29zLiBKYWphamFqYSBtZSBodWJpZXJhIGVuY2FudGFkbyBlc3RhciBhaMOtIHkgdmVydGUgaHVtaWxsYXIgYSB0b2RvIGVsIG11bmRvLiJ9",
    "2026-11-30": "eyJ0aXRsZSI6IjMwIGRlIG5vdmllbWJyZSIsImJvZHkiOiJBYWFhYWFhLCBoYWNlIHVuIGHDsW8gZnVlIG51ZXN0cmEgcHJpbWVyYSBzYWxpZGEsIHTDuiB5IHlvLiBMYSB2ZXJkYWQgZXNlIHBsYW5ldGFyaW8gZGUgQm9nb3TDoSBlc3R1dm8gbWVkaW8gbWVoIHBlcm8gZnVlIGluY3Jlw61ibGUgc2FsaXIgeSBwYXNhciB0aWVtcG8gY29udGlnbywgZGViZXLDrWFtb3MgaXIgYWwgZGUgTG9zIMOBbmdlbGVzIGFsZ8O6biBkw61hIGphamFqYWphLiBRdWllcm8gdm9sdmVyIGEgdmVydGUg8J+lui4ifQ==",
    "2026-12-01": "eyJ0aXRsZSI6IkRpY2llbWJyZSIsImJvZHkiOiIgQnVlbm8sIGxsZWfDsyBlbCDDumx0aW1vIG1lcyBkZWwgYcOxby4gU2VndXJhbWVudGUgeWEgZXN0YXJlbW9zIGRlIHZhY2FjaW9uZXMgZW4gbGEgdW5pdmVyc2lkYWQgYXPDrSBxdWUgZXNvIG5vcyBwZXJtaXRpcsOhIHBhc2FyIHRpZW1wbyDwn5iBLiBObyB0ZSBwYXJlY2UgaW5jcmXDrWJsZSBjb21vIGF2YW56YSBlbCB0aWVtcG8sIHF1ZSByZWN1ZXJkbyBjb21vIHNpIGZ1ZXJhIGF5ZXIgY3VhbmRvIGVtcGVjw6kgYSBoYWNlciBlc3RlIGNhbGVuZGFyaW8sIHkgeWEgbWUgdmEgYSB0b2NhciBoYWNlciBvdHJvIHBhcmEgMjAyNyBqYWphamFqYS4gVGUgcXVpZXJvIPCfmYMuIn0=",
    "2026-12-02": "eyJ0aXRsZSI6IjIgZGUgZGljaWVtYnJlIiwiYm9keSI6Ill5eXkgZGVzcHXDqXMgZGUgdHUgZ3JhZHVhY2nDs24sIHZpZW5lIGxhIG3DrWEgamFqYWphamEuIE5vIHB1ZWRlIHNlciBxdWUgdGUgaGF5YXMgZ3JhZHVhZG8gcHJpbWVybyBxdWUgeW8g8J+YkS4gRnVlIHVuIGTDrWEgaW5jcmXDrWJsZSBzaSBsbyBwaWVuc2Fz4oCmeSBsbyBtZWpvciBmdWUgY29tcGFydGlybG8gY29udGlnbzsgYXBhcnRlIHRvY2EgcmVjb3JkYXJ0ZSBsbyBib25pdGEgcXVlIHRlIHZlw61hcyBjb24gdHUgdmVzdGlkbyAoYWhvcml0YSBtZSBkaWNlcyBcImF5IHNpLCB5YSBsbyBzYWLDrWFcIiDwn5iQKS4gQWRlbcOhcywgY3VhbmRvIHNhbGltb3MgYSBjYW1pbmFyIGFsIHBhcnF1ZWNpdG8gZXNlIHTDuiB5IHlvLCBmdWVyb24gY2luY28gbWludXRvcyB5LCBhdW5xdWUgbWUgdHV2ZSBxdWUgaXIsIGZ1ZXJvbiBsb3MgbWVqb3JlcyBjaW5jbyBtaW51dG9zIGRlIG1pIHZpZGEuIPCfmYMifQ==",
    "2026-12-06": "eyJ0aXRsZSI6IjYgZGUgZGljaWVtYnJlIiwiYm9keSI6IlVuIGTDrWEgY29tbyBheWVyIHRlIGRpZXJvbiBsYSBub3RpY2lhIGRlIHF1ZSBoYWLDrWFzIGVudHJhZG8gYSBsYSB1bml2ZXJzaWRhZCBhIGVzdHVkaWFyIGxhIGNhcnJlcmEgcXVlIHTDuiBxdWVyw61hcywgcXVlIGVtb2Npb29vb29uLiBQZXJvLCBsbyBtw6FzIGltcG9ydGFudGUgZGUgaG95IGZ1ZSBxdWUgbWUgZGlzdGUgbGEgcmF6w7NuIGphamFqYWphamEg8J+ZgywgcG9ycXVlIG5vb28gbGEgdGVycXVlZGFkLCB0w7ogZGljaWVuZG8gcXVlIG5vIGliYXMgYSBlbnRyYXIsIHF1ZSBubyB0ZW7DrWFzIGlsdXNpb25lczsgc2UgdGUgb2x2aWTDsyBjb25jZW50cmFydGUgZW4gbG8gaW5jcmXDrWJsZSBxdWUgZXJlcywgYWxnbyBxdWUgeW8geWEgc2Fiw61hLiJ9",
    "2026-12-21": "eyJ0aXRsZSI6IjIxIGRlIGRpY2llbWJyZSIsImJvZHkiOiJIb3kgZXMgZWwgc29sc3RpY2lvIGRlIGludmllcm5vLCBlbCBkw61hIG3DoXMgY29ydG8gZGVsIGHDsW8sIGUgaWd1YWwgcXVlIGVuIGVsIHNvbHN0aWNpbyBkZSB2ZXJhbm8sIGFxdcOtIHRlIHZhIHVuIGRhdG86IEVuIGVsIE1JVCBob3ksIGVsIHNvbCBzYWxkcsOtYSBtw6FzIG8gbWVub3MgYSBsYXMgN2FtIHkgc2Ugb2N1bHRhcsOtYSBhbHJlZGVkb3IgZGUgbGFzIDRwbS4gRXNvIGRlamEgYXBlbmFzIHVuYXMgOSBob3JhcyBkZSBsdXog8J+YsS4gRXMgY3VyaW9zbyBwZW5zYXIgcXVlIGVzIGVsIGV4dHJlbW8gb3B1ZXN0byBhIGp1bmlvLiBBw7puIGFzw60sIHVuIGTDrWEgdGFuIGNvcnRvLCBtZSBpbWFnaW5vIHF1ZSBzZSBwYXNhcsOtYSB2b2xhbmRvIHNpIGVzdHV2acOpcmFtb3MgbG9zIGRvcyBhbGzDoS4g8J+ZgyJ9",
    "2026-12-25": "eyJ0aXRsZSI6Ik5hdmlkYWQiLCJib2R5IjoiRmVsaXogbmF2aWRhYWFhYWFhZC4gwr9UZSBtb2xlc3RhIHNpIHRlIGVudnVlbHZlbiBlbiB1biByZWdhbGl0byB5IHRlIG1hbmRhbiBhIG1pIGNhc2E/IGphamFqYWphLiBUZSBxdWllcm8g4p2k77iPLiJ9",
    "2026-12-31": "eyJ0aXRsZSI6IkNlcnJhbmRvIGVzdGUgYcOxbyIsImJvZHkiOiJCdWVuby4uLiBob3kgc2UgdGVybWluYSBlbCAyMDI2LCB5IGNvbiBlc3RvIHRhbWJpw6luIGVzdGUgcHJveWVjdG8uIMK/VGVuZHJlbW9zIGNhbGVuZGFyaW8gMjAyNz8gVGFsIHZlei4uLiBvIHRhbCB2ZXogYWxnbyBtZWpvci4gRGUgdmVyZGFkLCBncmFjaWFzIHBvciBlc3RlIGHDsW8uIFBvciBjb21wYXJ0aXJsbyBjb25taWdvLCBwb3IgY2FkYSBjb252ZXJzYWNpw7NuLCBjYWRhIHJpc2EsIGNhZGEgbWVldCwgY2FkYSBwZWzDrWN1bGEsIHkgY2FkYSBtb21lbnRvIHF1ZSBoZW1vcyB2aXZpZG8ganVudG9zLCB5YSBzZWEgYSA3MDAga2lsw7NtZXRyb3MgZGUgZGlzdGFuY2lhIG8gc2kgaGVtb3MgdGVuaWRvIGxhIHBvc2liaWxpZGFkIGRlIGVzdGFyIGNlcmNhIGbDrXNpY2FtZW50ZS4gVMOpY25pY2FtZW50ZSwgZW4gZWwgbW9tZW50byBlbiBxdWUgZXN0b3kgZXNjcmliaWVuZG8gZXN0byBuaSBzaXF1aWVyYSBoYSBlbXBlemFkbyBlbCAyMDI2LCBwZXJvIHRlbmdvIGxhIGNlcnRlemEgZGUgcXVlIHZlbmdhIGxvIHF1ZSB2ZW5nYSwgcGFzZSBsbyBxdWUgcGFzZSwgdmEgYSBzZXIgZXNwZWNpYWwgc29sbyBwb3Igdml2aXJsbyBjb250aWdvLiBHcmFjaWFzIHBvciBleGlzdGlyIGVuIG1pIHZpZGEsIHkgcG9yIGRlamFybWUgZXhpc3RpciBlbiBsYSB0dXlhLiBUZSBxdWllcm8gZGVtYXNpYWRvIOKdpO+4jy4ifQ==",
};

async function getColombiaDate() {
    try {
        const response = await fetch('https://worldtimeapi.org/api/timezone/America/Bogota', { signal: AbortSignal.timeout(2000) });
        const data = await response.json();
        return new Date(data.datetime);
    } catch (error) {
        return new Date();
    }
}

function getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(month, year) {
    const day = new Date(year, month, 1).getDay();
    return (day === 0 ? 6 : day - 1); 
}

function initProgressBar(nowDate) {
    const fillEl = document.getElementById('progress-fill');
    const textEl = document.getElementById('progress-text');

    const start2026 = new Date(`${YEAR}-01-01T00:00:00-05:00`);
    const end2026 = new Date(`${YEAR+1}-01-01T00:00:00-05:00`);

    const endOfCurrentDay = new Date(nowDate);
    
    endOfCurrentDay.setHours(23, 59, 59, 999);

    const totalYearMs = end2026 - start2026;
    
    const elapsedMs = endOfCurrentDay - start2026;

    let percent = 0;

    if (elapsedMs <= 0) {
        percent = 0;
    } else if (elapsedMs >= totalYearMs) {
        percent = 100;
    } else {
        percent = (elapsedMs / totalYearMs) * 100;
    }

    if (percent > 100) percent = 100;

    let displayPercent = Math.floor(percent * 100) / 100;
    
    textEl.textContent = (displayPercent % 1 === 0) ? `${displayPercent}%` : `${displayPercent.toFixed(2)}%`;

    setTimeout(() => {
        fillEl.style.width = `${percent}%`;
    }, 100);
}

async function initCalendar() {
    const grid = document.getElementById('calendar-grid');
    const nowAbs = await getColombiaDate();
    const colombiaString = nowAbs.toLocaleString('en-US', { timeZone: 'America/Bogota' });
    
    // const colombiaDate = new Date(colombiaString); // Fecha Real
    
    // DESCOMENTAR PARA PRUEBAS (Simular fecha 2026):
    const colombiaDate = new Date(2026, 11, 31); 
    
    initProgressBar(colombiaDate);

    const currentYear = colombiaDate.getFullYear();
    const currentMonth = colombiaDate.getMonth();
    const currentDay = colombiaDate.getDate();

    const compareDate = new Date(colombiaDate);
    compareDate.setHours(0,0,0,0);

    grid.innerHTML = "";

    for (let m = 0; m < 12; m++) {
        const monthCard = document.createElement('div');
        monthCard.className = 'month-card';
        monthCard.style.transitionDelay = `${m * 0.1}s`;

        const title = document.createElement('div');
        title.className = 'month-title';
        title.textContent = MONTH_NAMES[m];
        monthCard.appendChild(title);

        const weekRow = document.createElement('div');
        weekRow.className = 'weekdays';
        WEEKDAYS.forEach(d => {
            const span = document.createElement('span');
            span.textContent = d;
            weekRow.appendChild(span);
        });
        monthCard.appendChild(weekRow);

        const daysContainer = document.createElement('div');
        daysContainer.className = 'days-grid';

        const daysInMonth = getDaysInMonth(m, YEAR);
        const firstDayIdx = getFirstDayOfMonth(m, YEAR);

        for (let i = 0; i < firstDayIdx; i++) {
            const empty = document.createElement('div');
            empty.className = 'day-cell empty';
            daysContainer.appendChild(empty);
        }

        for (let d = 1; d <= daysInMonth; d++) {
            const cell = document.createElement('div');
            cell.className = 'day-cell';
            cell.textContent = d;

            const dateStr = `${YEAR}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
            
            const isToday = (YEAR === currentYear && m === currentMonth && d === currentDay);
            const isSpecial = ENCRYPTED_DB.hasOwnProperty(dateStr);
            
            const targetDate = new Date(YEAR, m, d);
            const isLocked = targetDate > compareDate;

            if (isToday) cell.classList.add('current-day');
            
            if (isSpecial) {
                cell.classList.add('special-day');
                cell.onclick = () => openModal(dateStr, isLocked, isSpecial);
            }

            daysContainer.appendChild(cell);
        }

        monthCard.appendChild(daysContainer);
        grid.appendChild(monthCard);
    }

    setTimeout(() => {
        document.querySelectorAll('.month-card').forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
        });
    }, 500);

    setTimeout(() => {
        const progressSection = document.querySelector('.progress-section');
        if(progressSection) {
            progressSection.classList.add('visible');
        }
    }, 2200); 
}

function openModal(dateStr, isLocked, isSpecial) {
    const overlay = document.getElementById('modal-overlay');
    const titleEl = document.getElementById('modal-title');
    const bodyEl = document.getElementById('modal-body');

    titleEl.textContent = "";
    bodyEl.innerHTML = "";
    titleEl.style.color = "";

    overlay.classList.add('active');

    if (isLocked) {
        titleEl.textContent = "⏳ Paciencia...";
        titleEl.style.color = "#999";
        bodyEl.innerHTML = `<p class="lock-message">Este día aún no ha llegado.<br>Lo bueno toma tiempo 🙃.</p>`;
        return;
    }

    if (isSpecial) {
        try {
            const encodedData = ENCRYPTED_DB[dateStr];
            
            const jsonString = decodeURIComponent(escape(window.atob(encodedData)));
            const eventData = JSON.parse(jsonString);

            titleEl.textContent = eventData.title;
            titleEl.style.color = "var(--accent-gold)";
            bodyEl.innerHTML = `<p>${eventData.body.replace(/\n/g, '<br>')}</p>`;

        } catch (e) {
            console.error("Error al decodificar:", e);
            titleEl.textContent = "Error";
            titleEl.style.color = "red";
            bodyEl.textContent = "No se pudo descifrar el mensaje.";
        }
    }
}

document.getElementById('modal-close').onclick = () => {
    document.getElementById('modal-overlay').classList.remove('active');
};

document.getElementById('modal-overlay').onclick = (e) => {
    if (e.target.id === 'modal-overlay') {
        e.target.classList.remove('active');
    }
};

window.addEventListener('load', () => {
    const intro = document.getElementById('intro-screen');
    const main = document.getElementById('main-container');

    setTimeout(() => {
        intro.style.opacity = '0';
        setTimeout(() => {
            intro.style.display = 'none';
            main.style.opacity = '1';
            initCalendar();
        }, 1500);
    }, 2500);
});
